import React from "react"
import { PageTitle } from "../../core/components/PageTitle"
import styled from "../../theming/custom"
import { Section } from "../../core/components/Section"
import { SIDEBAR_WIDTH } from "../../core/constants"
import { PrimaryButton } from "../../../common/button/components/PrimaryButton"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { CalculationItem } from "./CalculationItem"

const Container = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH}px;
`

const SaveLoadSection = styled(Section)`
  margin-top: 32px;
`

export function DemandPage() {
  const { demandStore } = useStores()

  return useObserver(() => (
    <>
      <PageTitle title="Resident demands" icon="box" />
      <Container>
        <Sidebar>
          <Section label="Your islands">
            {demandStore.calculations.map((c, i) => (
              <CalculationItem key={c.name + i} calculation={c} />
            ))}
            <PrimaryButton
              stretch
              onClick={() => demandStore.add()}
              label="Add Island"
              icon="circledPlus"
            />
          </Section>
          <SaveLoadSection label="Save / Load">Nothing here yet...</SaveLoadSection>
        </Sidebar>
      </Container>
    </>
  ))
}
