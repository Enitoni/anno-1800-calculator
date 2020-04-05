import { PrimaryModal } from "../components/PrimaryModal"
import React from "react"
import { SecondaryButton } from "../../button/components/SecondaryButton"
import { useModalContext } from "../hooks/useModalContext"
import styled from "../../../modules/theming/custom"

const Pre = styled.pre`
  font-family: "Inter var", sans-serif;
  margin: 0;
`

export const renderAlertModal = (title: string, message: string) => {
  function AlertModal() {
    const modal = useModalContext()

    return (
      <PrimaryModal.Container>
        <PrimaryModal.Header title={title} />
        <PrimaryModal.Body>
          <Pre>{message}</Pre>
        </PrimaryModal.Body>
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
