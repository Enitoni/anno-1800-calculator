import { observable, computed } from "mobx"
import { ResidenceName } from "../types/ResidenceName"
import { ResourceName } from "../types/ResourceName"

import * as residences from "../residences"
import * as resources from "../resources"
import * as buildings from "../buildings"
import { Building } from "../types/Building"
import { Residence } from "../types/Residence"
import { Resource } from "../types/Resource"

/** Cached lookup object to easily associate building by product */
const buildingsByProduct = Object.fromEntries(
  Object.values(buildings).map((b) => [b.product, b] as const),
) as Record<ResourceName, Building>

export type SerializedIsland = {
  name: string
  population: Record<ResidenceName, number>
}

export type AssociatedResource = Resource & {
  building: Building
}

export const defaultIsland: SerializedIsland = {
  name: "",
  population: {
    farmers: 0,
    workers: 0,
    artisans: 0,
    engineers: 0,
    investors: 0,
    jornaleros: 0,
    obreros: 0,
  },
}

export class Island {
  @observable public name: string
  @observable public population: Record<ResidenceName, number>

  constructor(data = defaultIsland) {
    this.name = data.name
    this.population = data.population
  }

  @computed
  // Returns a tree of associated metadata used in calculations
  public get tree() {
    const mapResource = (name: ResourceName): AssociatedResource => {
      const resource = resources[name]
      const building = buildingsByProduct[name]

      if (!building) {
        console.log({ building, resource })
      }

      return {
        ...resource,
        building,
      }
    }

    const mapNeed = (need: Residence["needs"][0]) => {
      return {
        resource: mapResource(need.resource),
        amount: need.amount,
      }
    }

    return Object.entries(this.population)
      .filter(([_, p]) => p > 0)
      .map(([name, population]) => ({ ...residences[name as ResidenceName], population }))
      .map((residence) => ({
        ...residence,
        needs: residence.needs.map(mapNeed),
      }))
  }

  @computed
  public get demand() {
    const map = new Map<string, AssociatedResource & { consumption: number }>()

    // Add consumption to resource
    const add = (resource: AssociatedResource, amount: number) => {
      const existing = map.get(resource.name)

      if (existing) {
        existing.consumption += amount
        return
      }

      map.set(resource.name, { consumption: amount, ...resource })
    }

    // Loop through residences and add consumption to resources
    this.tree.forEach((entry) =>
      entry.needs.forEach((need) => add(need.resource, need.amount * entry.population)),
    )

    // Loop through accumulated resources and calculate production
    return [...map.values()].map((entry) => {
      const { building, consumption } = entry

      const productionPerChain = 60 / building.processingTime
      const requiredChains = Math.ceil(consumption / productionPerChain)
      const chainEffiency = (consumption / (requiredChains * productionPerChain)) * 100

      return { ...entry, productionPerChain, requiredChains, chainEffiency }
    })
  }

  @computed
  public get displayName() {
    return this.name || "Island"
  }

  public get serialized(): SerializedIsland {
    return {
      name: this.name,
      population: this.population,
    }
  }
}
