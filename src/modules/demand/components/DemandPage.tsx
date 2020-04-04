import React from "react"
import { PageTitle } from "../../core/components/PageTitle"
import styled from "../../theming/custom"
import { Section } from "../../core/components/Section"
import { SIDEBAR_WIDTH } from "../../core/constants"

const Container = styled.div`
  display: flex;
`

const Sidebar = styled(Section)`
  max-width: ${SIDEBAR_WIDTH}px;
`

export function DemandPage() {
  return (
    <>
      <PageTitle title="Resident demands" icon="box" />
      <Container>
        <Sidebar label="Your islands"></Sidebar>
      </Container>
    </>
  )
}
