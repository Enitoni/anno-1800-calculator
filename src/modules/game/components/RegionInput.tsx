import { RegionName } from "../types/RegionName"
import styled, { css } from "../../theming/custom"
import React, { useState, useEffect } from "react"
import { FIELDSET_ELEMENT_HEIGHT } from "../../../common/input/constants"
import * as regions from "../regions"
import { size } from "polished"
import { join } from "path"
import { slugify } from "../../../common/lang/string/slugify"
import { getColor, getTransparency } from "../../theming/helpers"

export type RegionInputProps = {
  value: RegionName
  onChange: (value: RegionName) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.div<{ active: boolean }>`
  height: ${FIELDSET_ELEMENT_HEIGHT};

  display: inline-flex;
  align-items: center;

  background: ${getColor("primary")};
  padding: 0px 12px;

  border-radius: 4px;

  margin-top: 16px;
  border: solid 2px transparent;

  transition: 200ms ease border-color;

  &:first-child {
    margin-top: 0px;
  }

  ${(props) =>
    props.active
      ? css`
          border-color: ${getColor("accent")};
        `
      : css`
          &:hover {
            border-color: ${getTransparency("lightPositive")};
            cursor: pointer;
          }
        `}
`

const Icon = styled.img`
  ${size(16)};
  filter: invert(1);
`

const Label = styled.span`
  margin-left: 8px;
  font-weight: 700;
`

export function RegionInput(props: RegionInputProps) {
  const { value, onChange } = props
  const [cachedValue, setCachedValue] = useState(value)

  useEffect(() => {
    setCachedValue(value)
  }, [value])

  return (
    <Container>
      {Object.entries(regions).map(([k, r]) => (
        <Input
          onClick={() => onChange(k as RegionName)}
          active={k === cachedValue}
          key={k}
        >
          <Icon
            src={join(__webpack_public_path__, `/img/regions/${slugify(r.name)}.png`)}
          />
          <Label>{r.name}</Label>
        </Input>
      ))}
    </Container>
  )
}
