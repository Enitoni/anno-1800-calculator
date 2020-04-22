import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable, autorun } from "mobx"
import { Island, SerializedIsland, defaultCalculation } from "../classes/Island"
import { StoredValue } from "../../../common/dom/classes/StoredValue"

const storedCalculations = new StoredValue<SerializedIsland[]>("stored-calculations", [
  defaultCalculation,
])

export class DemandStore implements InitializableStore {
  @observable public islands: Island[] = [new Island()]
  @observable public selected!: Island

  public init() {
    this.load(storedCalculations.restore())

    autorun(() => {
      storedCalculations.save(this.islands)
    })
  }

  public load(data: SerializedIsland[]) {
    this.islands = data.map((c) => new Island(c))
    this.selected = this.islands[0]
  }

  public clear() {
    this.islands = [new Island()]
    this.selected = this.islands[0]
  }

  public add() {
    const calculation = new Island()

    this.islands.push(calculation)
    this.selected = calculation
  }

  public remove(calculation: Island) {
    this.islands = this.islands.filter((c) => c !== calculation)
    this.selected = this.islands[0]
  }
}

export const demandStore = () => new DemandStore()
