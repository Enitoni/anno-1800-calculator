import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable, computed, autorun } from "mobx"
import { categories } from "../categories"
import { Building } from "../../game/types/Building"

import * as buildings from "../../game/buildings"
import { TraversedBuilding } from "../types/TraversedBuilding"

export class ChainStore implements InitializableStore {
  @observable.ref public selected = Object.values(categories)[0].buildings[0]

  public select(building: Building) {
    this.selected = building
  }

  public init() {
    autorun(() => {
      console.log(this.tree)
    })
  }

  @computed
  public get tree() {
    const traverse = (b: Building): TraversedBuilding => {
      const children = (b.children ?? []).map((x) => traverse(buildings[x]))

      return { ...b, children }
    }

    return traverse(this.selected)
  }
}

export const chainStore = () => new ChainStore()
