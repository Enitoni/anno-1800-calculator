import { Island } from "../classes/Island"
import styled, { css } from "styled-components"
import { useObserver } from "mobx-react-lite"
import React from "react"
import { getFontColor, getColor } from "../../theming/helpers"
import { useStores } from "../../../common/state/hooks/useStores"
import { ButtonList } from "../../../common/button/components/ButtonList"
import { useManager } from "../../../common/state/hooks/useManager"
import { IconButton } from "../../../common/button/components/IconButton"
import { deleteIsland } from "../actions/deleteIsland"

export type CalculationItemProps = {
  island: Island
}

const Container = styled.div`
  padding-top: 16px;

  display: flex;
  align-items: center;
`

const Name = styled.span<{ active: boolean }>`
  color: ${getFontColor("muted")};

  flex: 1;
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
  const manager = useManager()

  const { islandStore } = manager.stores
  const { island } = props

  const collection = islandStore.getCollectionByIsland(island)

  return useObserver(() => (
    <Container>
      <Name
        active={islandStore.selected === island}
        onClick={() => (islandStore.selected = island)}
      >
        {island.displayName}
      </Name>
      <IconButton
        icon="trashcan"
        onClick={() => deleteIsland(manager, island)}
        disabled={collection.islands.length === 1}
        title="Delete island"
      />
    </Container>
  ))
}
