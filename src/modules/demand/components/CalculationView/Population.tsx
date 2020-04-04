import { DemandCalculation } from "../../classes/DemandCalculation"
import styled from "../../../theming/custom"
import React from "react"
import { ResidenceName } from "../../types/ResidenceName"
import * as residences from "../../residences"
import { NumberInput } from "../../../../common/input/components/NumberInput"
import { useObserver } from "mobx-react-lite"
import { getColor } from "../../../theming/helpers"

export type CalculationPopulationProps = {
  calculation: DemandCalculation
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Controller = styled.div`
  width: 150px;
`

const ControllerLabel = styled.span`
  display: block;
  color: ${getColor("accent")};
  margin-bottom: 8px;
`

export function Population(props: CalculationPopulationProps) {
  const { calculation } = props

  const renderController = (name: ResidenceName) => {
    const { population } = calculation
    const residence = residences[name]

    return (
      <Controller>
        <ControllerLabel>{residence.name}</ControllerLabel>
        <NumberInput value={population[name]} onInput={(n) => (population[name] = n)} />
      </Controller>
    )
  }

  return useObserver(() => (
    <Container>
      {Object.keys(calculation.population).map((x) =>
        renderController(x as ResidenceName),
      )}
    </Container>
  ))
}
