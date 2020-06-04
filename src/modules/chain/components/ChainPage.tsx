import { PageTitle } from "../../core/components/PageTitle"
import React from "react"
import styled from "styled-components"
import { SIDEBAR_WIDTH } from "../../core/constants"
import * as buildings from "../../game/buildings"
import { BuildingItem } from "./BuildingItem"
import { ChainCategoryList } from "./ChainCategoryList"
import { Section } from "../../core/components/Section"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { BuildingTreeGraph } from "./BuildingTreeGraph/BuildingTreeGraph"

const Container = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH}px;
  flex-shrink: 0;
`

const Content = styled.div`
  margin-left: 64px;
  flex: 1;
`

export function ChainPage() {
  const { chainStore } = useStores()

  return useObserver(() => (
    <>
      <PageTitle title="Production Chains" icon="link" />
      <Container>
        <Sidebar>
          <Section label="Buildings">
            <ChainCategoryList />
          </Section>
        </Sidebar>
        <Content>
          <BuildingTreeGraph tree={chainStore.tree} />
        </Content>
      </Container>
    </>
  ))
}
