import { observable, computed } from "mobx"
import { ResidenceName } from "../types/ResidenceName"
import { ResourceName } from "../types/ResourceName"

import * as residences from "../residences"
import * as resources from "../resources"

export type SerializedCalculation = {
  name: string
  population: Record<ResidenceName, number>
}

export const defaultCalculation: SerializedCalculation = {
  name: "Unnamed Island",
  population: {
    farmer: 0,
    worker: 0,
    artisan: 0,
    engineer: 0,
    investor: 0,
    jornalero: 0,
    obrero: 0,
  },
}

export class DemandCalculation {
  @observable public name: string
  @observable public population: Record<ResidenceName, number>

  constructor(data = defaultCalculation) {
    this.name = data.name
    this.population = data.population
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

    return Object.entries(result).map(([key, consumption]) => ({
      ...resources[key as ResourceName],
      consumption: consumption!,
    }))
  }

  public get serialized(): SerializedCalculation {
    return {
      name: this.name,
      population: this.population,
    }
  }
}
