import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable } from "mobx"
import { categories } from "../categories"
import { Building } from "../../game/types/Building"

export class ChainStore implements InitializableStore {
  @observable.ref public selected = Object.values(categories)[0].buildings[0]

  public select(building: Building) {
    this.selected = building
  }

  public init() {}
}

export const chainStore = () => new ChainStore()
