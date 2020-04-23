import { observable, computed } from "mobx"
import { Island, SerializedIsland, defaultIsland } from "./Island"

export type SerializedIslandCollection = {
  name: string
  islands: SerializedIsland[]
}

export const defaultIslandCollection: SerializedIslandCollection = {
  name: "",
  islands: [defaultIsland],
}

/** Represents a collection of islands */
export class IslandCollection {
  @observable public name: string
  @observable public islands: Island[] = [new Island()]

  constructor(data = defaultIslandCollection) {
    this.name = data.name
    this.islands = data.islands.map((i) => new Island(i))
  }

  public add() {
    const island = new Island()
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
  public get totalPopulation() {
    return this.islands.reduce((acc, c) => c.totalPopulation + acc, 0)
  }
}
