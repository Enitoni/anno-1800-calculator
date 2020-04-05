import React from "react"
import { useStores } from "../../state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { ModalRenderer } from "./ModalRenderer"
import { TransitionGroup, Transition } from "react-transition-group"

export function ModalOverlay() {
  const { modalStore } = useStores()

  return useObserver(() => (
    <TransitionGroup>
      {modalStore.items
        .filter(item => item.visible)
        .map(item => (
          <Transition timeout={200} key={item.key}>
            {status => <ModalRenderer transitionStatus={status} item={item} />}
          </Transition>
        ))}
    </TransitionGroup>
  ))
}
