import styled from "../../theming/custom"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import React from "react"
import { getFontColor } from "../../theming/helpers"

const Row = styled.div`
  display: flex
  flex-direction: column;
  align-items: flex-end;
`

const Label = styled.span`
  font-weight: 500;
  font-size: 0.9em;

  color: ${getFontColor("muted")};
`

const Value = styled.span`
  font-weight: 700;
  margin-top: 8px;
`

export function DemandStatistics() {
  const { islandStore } = useStores()

  return useObserver(() => (
    <>
      <Row>
        <Label>Total population</Label>
        <Value>{islandStore.totalPopulation}</Value>
      </Row>
    </>
  ))
}
