import { AssociatedResource } from "../../game/types/Resource"
import { ResidenceNeedEntry } from "./getNeedEntries"

export type Demand = AssociatedResource & {
  productionPerChain: number
  requiredChains: number
  chainEfficiency: number
  consumption: number
}

export const calculateDemands = (needs: ResidenceNeedEntry[]): Demand[] => {
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
  needs.forEach((entry) =>
    entry.needs.forEach((need) => add(need.resource, need.amount * entry.population)),
  )

  // Loop through accumulated resources and calculate production
  return [...map.values()].map((entry) => {
    const { building, consumption } = entry

    const productionPerChain = 60 / building.processingTime
    const requiredChains = Math.ceil(consumption / productionPerChain)
    const chainEfficiency = (consumption / (requiredChains * productionPerChain)) * 100

    return { ...entry, productionPerChain, requiredChains, chainEfficiency }
  })
}
