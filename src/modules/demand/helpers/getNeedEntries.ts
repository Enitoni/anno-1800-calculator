import { ResidenceName } from "../../game/types/ResidenceName"
import { ResourceName } from "../../game/types/ResourceName"
import { AssociatedResource } from "../../game/types/Resource"
import { Residence } from "../../game/types/Residence"

import * as residences from "../../game/residences"
import * as resources from "../../game/resources"
import * as buildings from "../../game/buildings"
import { Building } from "../../game/types/Building"
import { PopulationEntry } from "../types/PopulationEntry"

export type ResidenceNeedEntry = {
  population: number
  name: string
  needs: {
    resource: AssociatedResource
    amount: number
  }[]
}

/** Cached lookup object to easily associate building by product */
const buildingsByProduct = Object.fromEntries(
  Object.values(buildings).map((b) => [b.product, b] as const),
) as Record<ResourceName, Building>

export const getNeedEntries = (population: PopulationEntry[]): ResidenceNeedEntry[] => {
  const mapResource = (name: ResourceName): AssociatedResource => {
    const resource = resources[name]
    const building = buildingsByProduct[name]

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

  return population
    .filter((p) => p.count > 0)
    .map((p) => ({ ...residences[p.name], population: p.count }))
    .map((residence) => ({
      ...residence,
      needs: residence.needs.map(mapNeed),
    }))
}
