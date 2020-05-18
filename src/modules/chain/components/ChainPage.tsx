import { PageTitle } from "../../core/components/PageTitle"
import React from "react"
import styled from "styled-components"
import { SIDEBAR_WIDTH } from "../../core/constants"
import * as buildings from "../../game/buildings"
import { BuildingItem } from "./BuildingItem"
import { ChainCategoryList } from "./ChainCategoryList"
import { Section } from "../../core/components/Section"

const Container = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH}px;
  flex-shrink: 0;
`

export function ChainPage() {
  return (
    <>
      <PageTitle title="Production Chains" icon="link" />
      <Container>
        <Sidebar>
          <Section label="Buildings">
            <ChainCategoryList />
          </Section>
        </Sidebar>
      </Container>
    </>
  )
}
