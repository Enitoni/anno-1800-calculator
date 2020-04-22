import { Manager } from "../../../common/state/types/Manager"
import { renderConfirmationModal } from "../../../common/modal/helpers/renderConfirmationModal"
import { IslandCollection } from "../classes/IslandCollection"

export const deleteCollection = (manager: Manager, collection: IslandCollection) => {
  const { islandStore, modalStore } = manager.stores

  modalStore.spawn({
    key: "delete-collection",
    render: renderConfirmationModal(
      "Delete collection?",
      `Are you sure you want to delete "${collection.name}"?`,
      () => islandStore.remove(collection),
    ),
  })
}
