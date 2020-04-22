import { Island } from "../../classes/Island"
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
import { deleteIsland } from "../../actions/deleteIsland"
import { useManager } from "../../../../common/state/hooks/useManager"

export type IslandViewProps = {
  island: Island
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

export function IslandView(props: IslandViewProps) {
  const manager = useManager()

  const { island } = props
  const { islandStore } = manager.stores

  return useObserver(() => (
    <Container>
      <Info>
        <FormField label="Name">
          <TextInput {...bindTextToObservable(island, "name")} />
        </FormField>
        <DeleteButton
          icon="trashcan"
          label="Delete"
          onClick={() => deleteIsland(manager, island)}
          disabled={islandStore.islands.length === 1}
        />
      </Info>
      <PopulationSection label="Population">
        <Population island={island} />
      </PopulationSection>
      <ResultSection label="Result">
        <DemandTable island={island} />
      </ResultSection>
    </Container>
  ))
}
