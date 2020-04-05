import { PrimaryModal } from "../components/PrimaryModal"
import React from "react"
import { SecondaryButton } from "../../button/components/SecondaryButton"
import { useModalContext } from "../hooks/useModalContext"

export const renderAlertModal = (title: string, message: string) => {
  function AlertModal() {
    const modal = useModalContext()

    return (
      <PrimaryModal.Container>
        <PrimaryModal.Header title={title} />
        <PrimaryModal.Body>{message}</PrimaryModal.Body>

        <PrimaryModal.Footer>
          <PrimaryModal.Actions>
            <SecondaryButton onClick={modal.close} label="OK" />
          </PrimaryModal.Actions>
        </PrimaryModal.Footer>
      </PrimaryModal.Container>
    )
  }

  return () => <AlertModal />
}
