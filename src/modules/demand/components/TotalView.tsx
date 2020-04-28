import { useStores } from "../../../common/state/hooks/useStores"
import { DemandTable } from "./DemandTable"
import React from "react"
import { Population } from "./Population"
import styled from "../../theming/custom"
import { Section } from "../../core/components/Section"
import { DemandStatistics } from "./DemandStatistics"
import { getTransparency } from "../../theming/helpers"

const ResultSection = styled(Section)`
  margin-top: 32px;
`

const Stats = styled.div`
  margin-top: 32px;
  padding-top: 32px;

  border-top: solid 2px ${getTransparency("lightPositive")};
`

export function TotalView() {
  const { islandStore } = useStores()

  return (
    <>
      <Population population={islandStore.population} />
      <Stats>
        <DemandStatistics />
      </Stats>
      <ResultSection label="Result">
        <DemandTable demands={islandStore.demand} />
      </ResultSection>
    </>
  )
}
