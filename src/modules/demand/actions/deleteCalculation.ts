import { DemandCalculation } from "../classes/DemandCalculation"
import { Manager } from "../../../common/state/types/Manager"
import { renderConfirmationModal } from "../../../common/modal/helpers/renderConfirmationModal"

export const deleteCalculation = (manager: Manager, calculation: DemandCalculation) => {
  const { demandStore, modalStore } = manager.stores

  modalStore.spawn({
    key: "delete-calculation",
    render: renderConfirmationModal(
      "Delete island?",
      `Are you sure you want to delete "${calculation.name}"?`,
      () => demandStore.remove(calculation),
    ),
  })
}
