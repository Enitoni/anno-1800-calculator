import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable, autorun, computed } from "mobx"
import { Island } from "../classes/Island"
import { StoredValue } from "../../../common/dom/classes/StoredValue"
import { IslandCollection, SerializedIslandCollection } from "../classes/IslandCollection"
import { sumPopulation } from "../helpers/sumPopulation"
import { getNeedEntries } from "../helpers/getNeedEntries"
import { calculateDemands } from "../helpers/calculateDemands"

const storedCollections = new StoredValue<SerializedIslandCollection[]>("collections", [
  IslandCollection.createDataByRegion("oldWorld"),
])

export class IslandStore implements InitializableStore {
  @observable public collections: IslandCollection[] = [new IslandCollection()]
  @observable public selected!: Island

  public init() {
    this.load(storedCollections.restore())

    autorun(() => {
      storedCollections.save(this.collections)
    })
  }

  public load(data: SerializedIslandCollection[]) {
    this.collections = data.map((c) => new IslandCollection(c))
    this.selected = this.islands[0]
  }

  public clear() {
    this.collections = [new IslandCollection()]
    this.selected = this.islands[0]
  }

  public add(data?: SerializedIslandCollection) {
    const collection = new IslandCollection(data)
    const island = collection.islands[0]

    this.collections.push(collection)
    this.selected = island
  }

  public remove(collection: IslandCollection) {
    const hadChildSelected = collection.islands.some((i) => i === this.selected)

    this.collections = this.collections.filter((c) => c !== collection)

    if (hadChildSelected) {
      this.selected = this.islands[0]
    }
  }

  public getCollectionByIsland(island: Island) {
    return this.collections.find((c) => c.islands.some((i) => i === island))!
  }

  @computed
  public get islands() {
    return this.collections.flatMap((c) => c.islands)
  }

  @computed
  public get population() {
    return sumPopulation(this.collections.map((c) => c.population))
  }

  @computed
  public get totalPopulation() {
    return this.collections.reduce((acc, c) => c.totalPopulation + acc, 0)
  }

  @computed
  public get demand() {
    const needs = getNeedEntries(this.population)
    return calculateDemands(needs)
  }
}

export const islandStore = () => new IslandStore()
