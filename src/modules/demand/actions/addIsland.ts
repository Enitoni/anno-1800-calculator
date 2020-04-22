import { Manager } from "../../../common/state/types/Manager"
import { IslandCollection } from "../classes/IslandCollection"

export const addIsland = (manager: Manager, collection: IslandCollection) => {
  const { islandStore } = manager.stores

  const island = collection.add()
  islandStore.selected = island
}
