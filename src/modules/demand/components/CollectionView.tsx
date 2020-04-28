import { Island } from "../classes/Island"
import { useObserver } from "mobx-react-lite"
import { TextInput } from "../../../common/input/components/TextInput"
import React from "react"
import { bindTextToObservable } from "../../../common/input/helpers/bindTextToObservable"
import { FormField } from "../../../common/form/components/FormField"
import { Population } from "./Population"
import styled from "../../theming/custom"
import { Section } from "../../core/components/Section"
import { DemandTable } from "./DemandTable"
import { IslandCollection } from "../classes/IslandCollection"

export type CollectionViewProps = {
  collection: IslandCollection
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Info = styled.div`
  display: flex;
  align-items: flex-end;
`

const PopulationSection = styled(Section)`
  margin-top: 32px;
`

const ResultSection = styled(Section)`
  margin-top: 32px;
`

export function CollectionView(props: CollectionViewProps) {
  const { collection } = props

  return useObserver(() => (
    <Container>
      <Info>
        <FormField label="Name">
          <TextInput {...bindTextToObservable(collection, "name")} />
        </FormField>
      </Info>
      <PopulationSection label="Population">
        <Population population={collection.population} />
      </PopulationSection>
      <ResultSection label="Result">
        <DemandTable demands={collection.demand} />
      </ResultSection>
    </Container>
  ))
}
