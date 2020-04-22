import { Island } from "../classes/Island"
import { Manager } from "../../../common/state/types/Manager"
import { renderConfirmationModal } from "../../../common/modal/helpers/renderConfirmationModal"

export const deleteIsland = (manager: Manager, island: Island) => {
  const { islandStore, modalStore } = manager.stores
  const collection = islandStore.getCollectionByIsland(island)

  modalStore.spawn({
    key: "delete-island",
    render: renderConfirmationModal(
      "Delete island?",
      `Are you sure you want to delete "${island.name}"?`,
      () => collection.remove(island),
    ),
  })
}
