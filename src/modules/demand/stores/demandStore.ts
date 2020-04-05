import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable, autorun } from "mobx"
import {
  DemandCalculation,
  SerializedCalculation,
  defaultCalculation,
} from "../classes/DemandCalculation"
import { StoredValue } from "../../../common/dom/classes/StoredValue"

const storedCalculations = new StoredValue<SerializedCalculation[]>(
  "stored-calculations",
  [defaultCalculation],
)

export class DemandStore implements InitializableStore {
  @observable public calculations: DemandCalculation[] = [new DemandCalculation()]
  @observable public selected!: DemandCalculation

  public init() {
    this.load(storedCalculations.restore())

    autorun(() => {
      storedCalculations.save(this.calculations)
    })
  }

  public load(data: SerializedCalculation[]) {
    this.calculations = data.map((c) => new DemandCalculation(c))
    this.selected = this.calculations[0]
  }

  public add() {
    this.calculations.push(new DemandCalculation())
  }
}

export const demandStore = () => new DemandStore()
