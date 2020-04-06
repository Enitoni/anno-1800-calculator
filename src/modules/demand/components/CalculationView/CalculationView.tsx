import { DemandCalculation } from "../../classes/DemandCalculation"
import { useObserver } from "mobx-react-lite"
import { TextInput } from "../../../../common/input/components/TextInput"
import React from "react"
import { bindTextToObservable } from "../../../../common/input/helpers/bindTextToObservable"
import { FormField } from "../../../../common/form/components/FormField"
import { Population } from "./Population"
import styled from "../../../theming/custom"
import { Section } from "../../../core/components/Section"
import { DemandTable } from "./DemandTable"
import { SecondaryButton } from "../../../../common/button/components/SecondaryButton"
import { deleteCalculation } from "../../actions/deleteCalculation"
import { useManager } from "../../../../common/state/hooks/useManager"

export type CalculationViewProps = {
  calculation: DemandCalculation
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Info = styled.div`
  display: flex;
  align-items: flex-end;
`

const DeleteButton = styled(SecondaryButton)`
  margin-left: 16px;
`

const PopulationSection = styled(Section)`
  margin-top: 32px;
`

const ResultSection = styled(Section)`
  margin-top: 32px;
`

export function CalculationView(props: CalculationViewProps) {
  const manager = useManager()

  const { calculation } = props
  const { demandStore } = manager.stores

  return useObserver(() => (
    <Container>
      <Info>
        <FormField label="Name">
          <TextInput {...bindTextToObservable(calculation, "name")} />
        </FormField>
        <DeleteButton
          icon="trashcan"
          label="Delete"
          onClick={() => deleteCalculation(manager, calculation)}
          disabled={demandStore.calculations.length === 1}
        />
      </Info>
      <PopulationSection label="Population">
        <Population calculation={calculation} />
      </PopulationSection>
      <ResultSection label="Result">
        <DemandTable calculation={calculation} />
      </ResultSection>
    </Container>
  ))
}
