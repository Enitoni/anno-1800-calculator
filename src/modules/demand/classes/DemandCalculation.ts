import { observable, computed } from "mobx"
import { ResidenceName } from "../types/ResidenceName"
import { ResourceName } from "../types/ResourceName"

import * as residences from "../residences"
import * as resources from "../resources"

export class DemandCalculation {
  @observable public name = "Unnamed Island"
  @observable public population: Record<ResidenceName, number> = {
    farmer: 2460, // set this to 0 when there's ui for it,
    worker: 2000,
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
