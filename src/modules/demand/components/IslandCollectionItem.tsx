import { IslandCollection } from "../classes/IslandCollection"
import styled from "../../theming/custom"
import { useObserver } from "mobx-react-lite"
import React from "react"
import { IslandItem } from "./IslandItem"

export type IslandCollectionItemProps = {
  collection: IslandCollection
}

const Container = styled.div``

const Header = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.span``

const List = styled.div`
  margin-left: 16px;
`

export function IslandCollectionItem(props: IslandCollectionItemProps) {
  const { collection } = props

  return useObserver(() => (
    <Container>
      <Header>
        <Label>{collection.name || "Unnamed collection"}</Label>
      </Header>
      <List>
        {collection.islands.map((x, i) => (
          <IslandItem key={x.name + i} island={x} />
        ))}
      </List>
    </Container>
  ))
}
