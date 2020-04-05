import React from "react"
import { PageTitle } from "../../core/components/PageTitle"
import styled from "../../theming/custom"
import { Section } from "../../core/components/Section"
import { SIDEBAR_WIDTH } from "../../core/constants"
import { PrimaryButton } from "../../../common/button/components/PrimaryButton"
import { useObserver } from "mobx-react-lite"
import { CalculationItem } from "./CalculationItem"
import { CalculationView } from "./CalculationView/CalculationView"
import { ButtonList } from "../../../common/button/components/ButtonList"
import { SaveCalculationsModal } from "./SaveCalculationsModal"
import { useManager } from "../../../common/state/hooks/useManager"
import { importCalculations } from "../actions/importCalculations"

const Container = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH}px;
  flex-shrink: 0;
`

const CalculationList = styled.div`
  margin-top: -8px;
  margin-bottom: 8px;
`

const SelectedCalculation = styled.div`
  margin-left: 64px;
  flex: 1;
`

export function DemandPage() {
  const manager = useManager()
  const { demandStore, modalStore } = manager.stores

  const renderSelected = () => {
    const { selected } = demandStore
    if (!selected) return

    return <CalculationView calculation={selected} />
  }

  const spawnSaveModal = () =>
    modalStore.spawn({
      key: "save-calculations",
      render: () => <SaveCalculationsModal />,
    })

  return useObserver(() => (
    <>
      <PageTitle title="Resident demands" icon="box">
        <ButtonList horizontal>
          <PrimaryButton icon="save" label="Export" onClick={spawnSaveModal} />
          <PrimaryButton
            icon="folder"
            label="Import"
            onClick={() => importCalculations(manager)}
          />
        </ButtonList>
      </PageTitle>
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
        </Sidebar>
        <SelectedCalculation>{renderSelected()}</SelectedCalculation>
      </Container>
    </>
  ))
}
