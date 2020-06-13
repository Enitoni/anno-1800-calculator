import { Manager } from "../../../common/state/types/Manager"
import { Island } from "../classes/Island"
import { renderIslandRegionModal } from "../helpers/renderIslandRegionModal"
import { RegionName } from "../../game/types/RegionName"

export const changeIslandRegion = (manager: Manager, island: Island) => {
  const { modalStore } = manager.stores

  const action = (region: RegionName) => {
    if (island.region === region) return

    island.changeRegion(region)
  }

  modalStore.spawn({
    key: "change-island-region",
    render: renderIslandRegionModal(island, action),
  })
}
