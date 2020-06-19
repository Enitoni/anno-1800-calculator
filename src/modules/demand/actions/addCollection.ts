import { Manager } from "../../../common/state/types/Manager"
import {
  CollectionData,
  renderNewCollectionModal,
} from "../helpers/renderNewCollectionModal"
import { Island } from "../classes/Island"

export const addCollection = (manager: Manager) => {
  const { modalStore, islandStore } = manager.stores

  const action = (data: CollectionData) => {
    islandStore.add({
      defaultRegion: data.region,
      name: data.name,
      islands: [Island.createDataByRegion(data.region)],
    })
  }

  modalStore.spawn({
    key: "new-collection",
    render: renderNewCollectionModal(action),
  })
}
