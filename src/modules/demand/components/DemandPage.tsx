import React from "react"
import { PageTitle } from "../../core/components/PageTitle"
import styled from "../../theming/custom"
import { Section } from "../../core/components/Section"
import { SIDEBAR_WIDTH } from "../../core/constants"
import { PrimaryButton } from "../../../common/button/components/PrimaryButton"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { CalculationItem } from "./CalculationItem"
import { CalculationView } from "./CalculationView"

const Container = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH}px;
`

const CalculationList = styled.div`
  margin-top: -8px;
  margin-bottom: 8px;
`

const SaveLoadSection = styled(Section)`
  margin-top: 32px;
`

const SelectedCalculation = styled.div`
  margin-left: 64px;
`

export function DemandPage() {
  const { demandStore } = useStores()

  const renderSelected = () => {
    const { selected } = demandStore
    if (!selected) return

    return <CalculationView calculation={selected} />
  }

  return useObserver(() => (
    <>
      <PageTitle title="Resident demands" icon="box" />
      <Container>
        <Sidebar>
          <Section label="Your islands">
            <CalculationList>
              {demandStore.calculations.map((c, i) => (
                <CalculationItem key={c.name + i} calculation={c} />
              ))}
            </CalculationList>
            <PrimaryButton
              stretch
              onClick={() => demandStore.add()}
              label="Add Island"
              icon="circledPlus"
            />
          </Section>
          <SaveLoadSection label="Save / Load">Nothing here yet...</SaveLoadSection>
        </Sidebar>
        <SelectedCalculation>{renderSelected()}</SelectedCalculation>
      </Container>
    </>
  ))
}
