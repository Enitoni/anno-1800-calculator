import { Building } from "../../game/types/Building"
import { ResidenceName } from "../../game/types/ResidenceName"

import * as residences from "../../game/residences"
import { ChainCategory } from "../types/ChainCategory"

export const categorizeBuildingsByResidence = (
  buildings: Building[],
): ChainCategory[] => {
  const categories: Partial<Record<ResidenceName, Building[]>> = {}

  for (const building of buildings) {
    const { residence } = building.staff
    const arr = categories[residence] || []

    categories[residence] = arr
    arr.push(building)
  }

  return Object.entries(categories).map(([k, buildings]) => ({
    residence: residences[k as ResidenceName],
    buildings: buildings!,
  }))
}
