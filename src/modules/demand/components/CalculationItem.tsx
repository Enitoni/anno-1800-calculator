import { DemandCalculation } from "../classes/DemandCalculation"
import styled from "styled-components"
import { useObserver } from "mobx-react-lite"
import React from "react"
import { getFontColor } from "../../theming/helpers"

export type CalculationItemProps = {
  calculation: DemandCalculation
}

const Container = styled.div`
  color: ${getFontColor("muted")};

  margin-bottom: 16px;
`

export function CalculationItem(props: CalculationItemProps) {
  const { calculation } = props

  return useObserver(() => <Container>{calculation.name}</Container>)
}
