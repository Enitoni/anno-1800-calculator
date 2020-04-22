import { IslandCollection } from "../classes/IslandCollection"
import styled from "../../theming/custom"
import { useObserver } from "mobx-react-lite"
import React from "react"
import { IslandItem } from "./IslandItem"
import { ButtonList } from "../../../common/button/components/ButtonList"
import { IconButton } from "../../../common/button/components/IconButton"
import { useManager } from "../../../common/state/hooks/useManager"
import { deleteCollection } from "../actions/deleteCollection"
import { addIsland } from "../actions/addIsland"

export type IslandCollectionItemProps = {
  collection: IslandCollection
}

const Container = styled.div`
  padding: 16px 0px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.span`
  flex: 1;
  font-weight: 500;
`

const Actions = styled(ButtonList)`
  align-items: center;
`

const List = styled.div`
  padding-left: 8px;
`

export function IslandCollectionItem(props: IslandCollectionItemProps) {
  const manager = useManager()

  const { islandStore } = manager.stores
  const { collection } = props

  return useObserver(() => (
    <Container>
      <Header>
        <Label>{collection.displayName}</Label>
        <Actions horizontal>
          <IconButton
            icon="circledPlus"
            onClick={() => addIsland(manager, collection)}
            title="Add island"
          />
          <IconButton
            icon="trashcan"
            onClick={() => deleteCollection(manager, collection)}
            disabled={islandStore.collections.length === 1}
            title="Delete collection"
          />
        </Actions>
      </Header>
      <List>
        {collection.islands.map((x, i) => (
          <IslandItem key={x.name + i} island={x} />
        ))}
      </List>
    </Container>
  ))
}
