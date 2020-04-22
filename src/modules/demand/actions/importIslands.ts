import { loadFromFile } from "../../../common/dom/helpers/loadFromFile"
import { Manager } from "../../../common/state/types/Manager"
import { renderAlertModal } from "../../../common/modal/helpers/renderAlertModal"

const attemptLoad = async () => {
  const data = await loadFromFile()
  if (!data) return

  const parsedData = JSON.parse(data)

  if (!Array.isArray(parsedData)) {
    throw new Error("Invalid JSON")
  }

  return parsedData
}

export const importIslands = async (manager: Manager) => {
  const { demandStore, modalStore } = manager.stores

  try {
    const calculations = await attemptLoad()
    if (!calculations) return

    demandStore.load(calculations)
  } catch (e) {
    modalStore.spawn({
      key: "import-error",
      render: renderAlertModal(
        "Oops!",
        "An error occurred reading your file.\nMake sure it is a JSON file exported from here.",
      ),
    })
  }
}
