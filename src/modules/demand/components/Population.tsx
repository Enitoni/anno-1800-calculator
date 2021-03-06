import { Island } from "../classes/Island"
import styled from "../../theming/custom"
import React from "react"
import { ResidenceName } from "../../game/types/ResidenceName"
import * as residences from "../../game/residences"
import { NumberInput } from "../../../common/input/components/NumberInput"
import { useObserver } from "mobx-react-lite"
import { getColor } from "../../theming/helpers"
import { size } from "polished"
import { slugify } from "../../../common/lang/string/slugify"
import { join } from "path"
import { PopulationEntry } from "../types/PopulationEntry"

export type PopulationProps = {
  population: PopulationEntry[]
  editable?: boolean
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 32px;
`

const Controller = styled.div`
  width: auto;
`

const ControllerLabel = styled.span`
  display: block;
  font-size: 0.8em;
  font-weight: 700;

  margin-left: 8px;
  color: ${getColor("accent")};
`

const ControllerHeader = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
`

const Amount = styled.div`
  font-weight: 700;
  font-size: 1em;

  margin-top: 16px;
`

const Avatar = styled.img`
  ${size(24)};
  border-radius: 100%;
`

export function Population(props: PopulationProps) {
  const { population, editable } = props

  const renderAmount = (entry: PopulationEntry) => {
    if (!editable) {
      return <Amount>{entry.count}</Amount>
    }

    return (
      <NumberInput
        controls={false}
        value={entry.count}
        min={0}
        onInput={(n) => (entry.count = n)}
      />
    )
  }

  const renderController = (entry: PopulationEntry) => {
    const residence = residences[entry.name]

    return (
      <Controller key={residence.name}>
        <ControllerHeader>
          <Avatar
            src={join(
              __webpack_public_path__,
              `/img/residences/${slugify(residence.name)}.png`,
            )}
          />
          <ControllerLabel>{residence.name}</ControllerLabel>
        </ControllerHeader>
        {renderAmount(entry)}
      </Controller>
    )
  }

  return useObserver(() => (
    <Container>{population.map((x) => renderController(x))}</Container>
  ))
}
