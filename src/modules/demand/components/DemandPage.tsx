import React from "react"
import { PageTitle } from "../../core/components/PageTitle"
import styled from "../../theming/custom"
import { Section } from "../../core/components/Section"
import { SIDEBAR_WIDTH } from "../../core/constants"
import { PrimaryButton } from "../../../common/button/components/PrimaryButton"

const Container = styled.div`
  display: flex;
`

const Sidebar = styled(Section)`
  width: ${SIDEBAR_WIDTH}px;
`

export function DemandPage() {
  return (
    <>
      <PageTitle title="Resident demands" icon="box" />
      <Container>
        <Sidebar label="Your islands">
          <PrimaryButton
            stretch
            onClick={() => {}}
            label="Add Island"
            icon="circledPlus"
          />
        </Sidebar>
      </Container>
    </>
  )
}
