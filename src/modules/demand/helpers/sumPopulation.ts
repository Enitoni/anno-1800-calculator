import { ResidenceName } from "../../game/types/ResidenceName"

export const sumPopulation = (populations: Record<ResidenceName, number>[]) => {
  const [first, ...rest] = populations
  const result = { ...first }

  for (const population of rest) {
    for (const [name, amount] of Object.entries(population)) {
      result[name as ResidenceName] += amount
    }
  }

  return result
}
