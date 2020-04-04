import { DemandCalculation } from "../classes/DemandCalculation"
import { useObserver } from "mobx-react-lite"
import { TextInput } from "../../../common/input/components/TextInput"
import React from "react"
import { bindTextToObservable } from "../../../common/input/helpers/bindTextToObservable"
import { FormField } from "../../../common/form/components/FormField"

export type CalculationViewProps = {
  calculation: DemandCalculation
}

export function CalculationView(props: CalculationViewProps) {
  const { calculation } = props

  return useObserver(() => (
    <>
      <FormField label="Name">
        <TextInput {...bindTextToObservable(calculation, "name")} />
      </FormField>
    </>
  ))
}
