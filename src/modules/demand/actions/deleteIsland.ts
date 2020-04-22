import { Island } from "../classes/Island"
import { Manager } from "../../../common/state/types/Manager"
import { renderConfirmationModal } from "../../../common/modal/helpers/renderConfirmationModal"

export const deleteIsland = (manager: Manager, island: Island) => {
  const { demandStore, modalStore } = manager.stores

  modalStore.spawn({
    key: "delete-calculation",
    render: renderConfirmationModal(
      "Delete island?",
      `Are you sure you want to delete "${island.name}"?`,
      () => demandStore.remove(island),
    ),
  })
}
