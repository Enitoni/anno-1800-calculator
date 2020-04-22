import { Island } from "../classes/Island"
import styled, { css } from "styled-components"
import { useObserver } from "mobx-react-lite"
import React from "react"
import { getFontColor, getColor } from "../../theming/helpers"
import { useStores } from "../../../common/state/hooks/useStores"

export type CalculationItemProps = {
  island: Island
}

const Container = styled.div<{ active: boolean }>`
  color: ${getFontColor("muted")};
  padding: 8px 0px;

  transition: 200ms ease color;

  ${(props) => {
    if (!props.active) {
      return css`
        &:hover {
          cursor: pointer;
          color: ${getFontColor("normal")};
        }
      `
    }

    return css`
      pointer-events: none;
      color: ${getColor("accent")};
    `
  }}
`

export function IslandItem(props: CalculationItemProps) {
  const { islandStore } = useStores()
  const { island } = props

  return useObserver(() => (
    <Container
      active={islandStore.selected === island}
      onClick={() => (islandStore.selected = island)}
    >
      {island.name || "Unnamed island"}
    </Container>
  ))
}
