import { observable, computed } from "mobx"
import { calculateDemands } from "../helpers/calculateDemands"
import { getNeedEntries } from "../helpers/getNeedEntries"
import { RegionName } from "../../game/types/RegionName"
import { PopulationEntry } from "../types/PopulationEntry"

import * as regions from "../../game/regions"

export type SerializedIsland = {
  name: string
  region: RegionName
  population: PopulationEntry[]
}

export class Island {
  @observable public name: string
  @observable public region: RegionName
  @observable public population: PopulationEntry[]

  public static createDataByRegion(name: RegionName) {
    const region = regions[name]

    return {
      name: "",
      region: name,
      population: region.residences.map((x) => ({ name: x, count: 0 })),
    }
  }

  constructor(data = Island.createDataByRegion("oldWorld")) {
    this.name = data.name
    this.region = data.region
    this.population = data.population
  }

  @computed
  public get demand() {
    const needs = getNeedEntries(this.population)
    return calculateDemands(needs)
  }

  @computed
  public get displayName() {
    return this.name || "Island"
  }

  @computed
  public get totalPopulation() {
    return Object.values(this.population).reduce((acc, c) => acc + c.count, 0)
  }

  public get serialized(): SerializedIsland {
    return {
      name: this.name,
      region: this.region,
      population: this.population,
    }
  }
}
