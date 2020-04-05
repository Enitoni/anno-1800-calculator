import React from "react"
import styled, { css, keyframes } from "../../../modules/theming/custom"

import { ModalItem } from "../stores/modalStore"
import { getColor } from "../../../modules/theming/helpers"
import { modalContext } from "../contexts/modalContext"
import { useStores } from "../../state/hooks/useStores"
import { TransitionStatus } from "react-transition-group/Transition"

const { Provider } = modalContext

export type ModalRendererProps = {
  transitionStatus: TransitionStatus
  item: ModalItem
}

const ContainerAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Container = styled.div<{ status: TransitionStatus }>`
  position: fixed;
  z-index: 5;

  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  background: ${getColor("overlay")};

  @supports (backdrop-filter: blur(0px)) {
    backdrop-filter: blur(15px);
  }

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.status === "entering")
      return css`
        animation: ${ContainerAnimation} 200ms ease forwards;
      `

    if (props.status === "exiting") {
      return css`
        animation: ${ContainerAnimation} 200ms ease forwards reverse;
      `
    }
  }}
`

const ContentAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
`

const Content = styled.div<{ status: TransitionStatus }>`
  ${(props) => {
    if (props.status === "entering")
      return css`
        animation: ${ContentAnimation} 200ms ease forwards;
      `

    if (props.status === "exiting") {
      return css`
        animation: ${ContentAnimation} 200ms ease forwards reverse;
      `
    }
  }}
`

export function ModalRenderer(props: ModalRendererProps) {
  const { render, key } = props.item
  const { modalStore } = useStores()

  const context = {
    dismiss: () => modalStore.dismiss(key),
    close: () => modalStore.dismiss(key, true),
  }

  const onClick = (event: React.MouseEvent) => {
    event.preventDefault()

    if (event.target === event.currentTarget) {
      context.dismiss()
    }
  }

  return (
    <Container status={props.transitionStatus} onClick={onClick}>
      <Content status={props.transitionStatus}>
        <Provider value={context}>{render()}</Provider>
      </Content>
    </Container>
  )
}
