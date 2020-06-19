import { observable, computed } from "mobx"
import { Island, SerializedIsland } from "./Island"
import { sumPopulation } from "../helpers/sumPopulation"
import { getNeedEntries } from "../helpers/getNeedEntries"
import { calculateDemands } from "../helpers/calculateDemands"
import { RegionName } from "../../game/types/RegionName"

import * as regions from "../../game/regions"

export type SerializedIslandCollection = {
  name: string
  defaultRegion: RegionName
  islands: SerializedIsland[]
}

/** Represents a collection of islands */
export class IslandCollection {
  @observable public name: string
  @observable public defaultRegion: RegionName
  @observable public islands: Island[] = [new Island()]

  public static createDataByRegion(name: RegionName) {
    return {
      name: regions[name].name,
      defaultRegion: name,
      islands: [Island.createDataByRegion(name)],
    }
  }

  constructor(data = IslandCollection.createDataByRegion("oldWorld")) {
    this.name = data.name
    this.defaultRegion = data.defaultRegion
    this.islands = data.islands.map((i) => new Island(i))
  }

  public add() {
    const island = new Island(Island.createDataByRegion(this.defaultRegion))
    this.islands.push(island)

    return island
  }

  public remove(island: Island) {
    this.islands = this.islands.filter((i) => i !== island)
  }

  @computed
  public get displayName() {
    return this.name || "Collection"
  }

  @computed
  public get population() {
    return sumPopulation(this.islands.map((i) => i.population))
  }

  @computed
  public get totalPopulation() {
    return this.islands.reduce((acc, c) => c.totalPopulation + acc, 0)
  }

  @computed
  public get demand() {
    const needs = getNeedEntries(this.population)
    return calculateDemands(needs)
  }
}
