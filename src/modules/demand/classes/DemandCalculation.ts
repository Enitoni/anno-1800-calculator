import { observable, computed } from "mobx"
import { ResidenceName } from "../types/ResidenceName"
import { ResourceName } from "../types/ResourceName"

import * as residences from "../residences"

const defaultPopulation: Record<ResidenceName, number> = {
  farmer: 0,
  worker: 0,
  artisan: 0,
  engineer: 0,
  investor: 0,
  journalero: 0,
  obrero: 0,
}

export class DemandCalculation {
  @observable public name: string
  @observable public population: Record<ResidenceName, number>

  constructor(name = "Unnamed Island", population = defaultPopulation) {
    this.name = name
    this.population = population
  }

  @computed
  public get demand() {
    const result: Partial<Record<ResourceName, number>> = {}

    const add = (name: ResourceName, amount: number) => {
      const existing = result[name]
      result[name] = existing ? existing + amount : amount
    }

    const filteredPopulation = Object.entries(this.population).filter(([_, p]) => p > 0)

    for (const [name, population] of filteredPopulation) {
      const residence = residences[name as ResidenceName]

      residence.needs
        .map((need) => [need.resource, need.amount * population] as const)
        .forEach(([resource, amount]) => add(resource, amount))
    }

    return result
  }
}
