import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable } from "mobx"
import { DemandCalculation } from "../classes/DemandCalculation"

export class DemandStore implements InitializableStore {
  @observable public calculations: DemandCalculation[] = [new DemandCalculation()]
  @observable public selected: DemandCalculation = this.calculations[0]

  public init() {}

  public add() {
    this.calculations.push(new DemandCalculation())
  }
}

export const demandStore = () => new DemandStore()
