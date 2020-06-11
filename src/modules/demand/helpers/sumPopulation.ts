import { ResidenceName } from "../../game/types/ResidenceName"
import { PopulationEntry } from "../types/PopulationEntry"

export const sumPopulation = (populations: PopulationEntry[][]): PopulationEntry[] => {
  const result: Partial<Record<ResidenceName, number>> = {}

  for (const population of populations) {
    for (const entry of population) {
      result[entry.name] = entry.count
    }
  }

  return Object.entries(result).map(([name, count]) => ({
    name: name as ResidenceName,
    count: count!,
  }))
}
