import React from "react"
import { PrimaryModal } from "../../../common/modal/components/PrimaryModal"
import { useModalContext } from "../../../common/modal/hooks/useModalContext"
import { PrimaryButton } from "../../../common/button/components/PrimaryButton"
import { useStores } from "../../../common/state/hooks/useStores"
import { saveToFile } from "../../../common/dom/helpers/saveToFile"
import { Code } from "../../../common/dom/components/Code"
import { SecondaryButton } from "../../../common/button/components/SecondaryButton"

export function SaveCalculationsModal() {
  const modal = useModalContext()
  const { demandStore } = useStores()

  const stringified = JSON.stringify(demandStore.calculations, null, " ")

  return (
    <PrimaryModal.Container>
      <PrimaryModal.Header title="Export Islands" />
      <PrimaryModal.Body>
        <Code>{stringified}</Code>
      </PrimaryModal.Body>
      <PrimaryModal.Footer>
        <PrimaryModal.Actions>
          <PrimaryButton
            onClick={() => saveToFile("calculations.json", stringified)}
            icon="download"
            label="Download JSON"
          />
          <SecondaryButton onClick={modal.close} icon="x" label="Close" />
        </PrimaryModal.Actions>
      </PrimaryModal.Footer>
    </PrimaryModal.Container>
  )
}
