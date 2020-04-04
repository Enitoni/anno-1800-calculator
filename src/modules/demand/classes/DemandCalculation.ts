import { observable, computed } from "mobx"
import { ResidenceName } from "../types/ResidenceName"
import { ResourceName } from "../types/ResourceName"

import * as residences from "../residences"

export class DemandCalculation {
  @observable public name = "Unnamed Island"
  @observable public population: Record<ResidenceName, number> = {
    farmer: 0, // set this to 0 when there's ui for it,
    worker: 0,
    artisan: 0,
    engineer: 0,
    investor: 0,
    journalero: 0,
    obrero: 0,
  }

  @computed
  public get demand() {
    const result: Partial<Record<ResourceName, number>> = {}

    const add = (name: ResourceName, amount: number) => {
      const existing = result[name]
      result[name] = existing ? existing + amount : amount
    }

    for (const [name, population] of Object.entries(this.population)) {
      const residence = residences[name as ResidenceName]

      residence.needs
        .map((need) => [need.resource, need.amount * population] as const)
        .forEach(([resource, amount]) => add(resource, amount))
    }

    return result
  }
}
