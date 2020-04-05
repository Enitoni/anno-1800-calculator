import { DemandCalculation } from "../../classes/DemandCalculation"
import { useObserver } from "mobx-react-lite"
import { TextInput } from "../../../../common/input/components/TextInput"
import React from "react"
import { bindTextToObservable } from "../../../../common/input/helpers/bindTextToObservable"
import { FormField } from "../../../../common/form/components/FormField"
import { Population } from "./Population"
import styled from "../../../theming/custom"
import { Section } from "../../../core/components/Section"

export type CalculationViewProps = {
  calculation: DemandCalculation
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const PopulationSection = styled(Section)`
  margin-top: 32px;
`

const ResultSection = styled(Section)`
  margin-top: 32px;
`

export function CalculationView(props: CalculationViewProps) {
  const { calculation } = props

  return useObserver(() => (
    <Container>
      <FormField label="Name">
        <TextInput {...bindTextToObservable(calculation, "name")} />
      </FormField>
      <PopulationSection label="Population">
        <Population calculation={calculation} />
      </PopulationSection>
      <ResultSection label="Result (Temporarily JSON)">
        <pre>{JSON.stringify(calculation.demand, null, " ")}</pre>
      </ResultSection>
    </Container>
  ))
}
