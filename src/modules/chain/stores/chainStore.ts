import { InitializableStore } from "../../../common/state/types/InitializableStore"
import { observable, computed, autorun } from "mobx"
import { categories } from "../categories"
import { Building } from "../../game/types/Building"

import * as buildings from "../../game/buildings"
import { TraversedBuilding } from "../types/TraversedBuilding"

export class ChainStore implements InitializableStore {
  @observable.ref public selected = Object.values(categories)[0].buildings[0]
  @observable public count = 1

  public select(building: Building) {
    this.selected = building
  }

  public init() {}

  /**
   * Returns a flat array of all associated buildings
   */
  @computed
  public get buildings() {
    const traverse = (building: Building): Building[] => {
      const children = building.children || []

      return [building, ...children.flatMap((c) => traverse(buildings[c]))]
    }

    return traverse(this.selected)
  }

  @computed
  public get chain() {
    const quickest = this.buildings.reduce((a, b) =>
      a.processingTime < b.processingTime ? a : b,
    )

    const productionPerMinute = 60 / quickest.processingTime
    const output = this.count * productionPerMinute

    const traverse = (building: Building): TraversedBuilding => {
      const count = building.processingTime / quickest.processingTime
      const children = (building.children || []).map((c) => traverse(buildings[c]))

      return { building, children, count }
    }

    return { output, tree: traverse(this.selected) }
  }
}

export const chainStore = () => new ChainStore()
