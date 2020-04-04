import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable } from "mobx"
import { DemandCalculation } from "../classes/DemandCalculation"

export class DemandStore implements InitializableStore {
  @observable public calculations: DemandCalculation[] = []
  @observable public selected?: DemandCalculation

  public init() {}

  public add() {
    this.calculations.push(new DemandCalculation())
  }
}

export const demandStore = () => new DemandStore()
