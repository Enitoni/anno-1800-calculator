import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable, autorun, computed } from "mobx"
import { Island } from "../classes/Island"
import { StoredValue } from "../../../common/dom/classes/StoredValue"
import {
  IslandCollection,
  SerializedIslandCollection,
  defaultIslandCollection,
} from "../classes/IslandCollection"

const storedCollections = new StoredValue<SerializedIslandCollection[]>("collections", [
  defaultIslandCollection,
])

export class IslandStore implements InitializableStore {
  @observable public collections: IslandCollection[] = [new IslandCollection()]
  @observable public selected!: Island

  public init() {
    this.load(storedCollections.restore())

    /*autorun(() => {
      storedCalculations.save(this.islands)
    })*/
  }

  public load(data: SerializedIslandCollection[]) {
    this.collections = data.map((c) => new IslandCollection(c))
    this.selected = this.islands[0]
  }

  public clear() {
    this.collections = [new IslandCollection()]
    this.selected = this.islands[0]
  }

  public add() {
    const collection = new IslandCollection()
    const island = collection.islands[0]

    this.collections.push(collection)
    this.selected = island
  }

  public getCollectionByIsland(island: Island) {
    return this.collections.find((c) => c.islands.some((i) => i === island))
  }

  @computed
  public get islands() {
    return this.collections.flatMap((c) => c.islands)
  }
}

export const islandStore = () => new IslandStore()
