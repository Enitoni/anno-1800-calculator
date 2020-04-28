import { Island } from "../classes/Island"
import styled from "../../theming/custom"
import React from "react"
import { ResidenceName } from "../types/ResidenceName"
import * as residences from "../residences"
import { NumberInput } from "../../../common/input/components/NumberInput"
import { useObserver } from "mobx-react-lite"
import { getColor } from "../../theming/helpers"
import { size } from "polished"
import { slugify } from "../../../common/lang/string/slugify"
import { join } from "path"

export type PopulationProps = {
  population: Record<ResidenceName, number>
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

  const renderAmount = (name: ResidenceName) => {
    const amount = population[name]

    if (!editable) {
      return <Amount>{amount}</Amount>
    }

    return (
      <NumberInput
        controls={false}
        value={population[name]}
        min={0}
        onInput={(n) => (population[name] = n)}
      />
    )
  }

  const renderController = (name: ResidenceName) => {
    const residence = residences[name]

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
        {renderAmount(name)}
      </Controller>
    )
  }

  return useObserver(() => (
    <Container>
      {Object.keys(population).map((x) => renderController(x as ResidenceName))}
    </Container>
  ))
}