import { ResidenceName } from "../types/ResidenceName"
import { ResourceName } from "../types/ResourceName"
import { AssociatedResource } from "../types/Resource"
import { Residence } from "../types/Residence"

import * as residences from "../residences"
import * as resources from "../resources"
import * as buildings from "../buildings"
import { Building } from "../types/Building"

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

export const getNeedEntries = (
  population: Record<ResidenceName, number>,
): ResidenceNeedEntry[] => {
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

  return Object.entries(population)
    .filter(([_, p]) => p > 0)
    .map(([name, population]) => ({ ...residences[name as ResidenceName], population }))
    .map((residence) => ({
      ...residence,
      needs: residence.needs.map(mapNeed),
    }))
}
