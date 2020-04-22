import { Manager } from "../../../common/state/types/Manager"
import { renderConfirmationModal } from "../../../common/modal/helpers/renderConfirmationModal"

export const clearAllIslands = (manager: Manager) => {
  const { islandStore, modalStore } = manager.stores

  modalStore.spawn({
    key: "delete-calculation",
    render: renderConfirmationModal(
      "Clear?",
      `Are you sure you want to clear all calculations?`,
      () => islandStore.clear(),
    ),
  })
}
