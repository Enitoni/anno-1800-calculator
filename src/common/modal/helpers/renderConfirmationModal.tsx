import { PrimaryModal } from "../components/PrimaryModal"
import React from "react"
import { SecondaryButton } from "../../button/components/SecondaryButton"
import { useModalContext } from "../hooks/useModalContext"
import styled from "../../../modules/theming/custom"
import { PrimaryButton } from "../../button/components/PrimaryButton"

const Pre = styled.pre`
  font-family: "Inter var", sans-serif;
  margin: 0;
`

export const renderConfirmationModal = (
  title: string,
  message: string,
  action: () => any,
) => {
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
            <PrimaryButton
              onClick={() => {
                action()
                modal.close()
              }}
              label="Yes"
            />
            <SecondaryButton onClick={modal.close} label="No" />
          </PrimaryModal.Actions>
        </PrimaryModal.Footer>
      </PrimaryModal.Container>
    )
  }

  return () => <AlertModal />
}
