import React from "react"
import styled from "../../../theming/custom"

import { Building } from "../../../game/types/Building"
import { size } from "polished"
import { getTransparency, getColor } from "../../../theming/helpers"
import { join } from "path"
import { slugify } from "../../../../common/lang/string/slugify"

import * as resources from "../../../game/resources"

export type TreeNodeProps = {
  onGetElement?: (element: HTMLElement | null) => void
  className?: string
  building: Building
  count: number
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Inner = styled.div`
  position: relative;
  padding: 8px;
  border-radius: 3px;
  background: ${getTransparency("lightPositive")};
`

const Image = styled.img`
  ${size(48)};
  display: block;
`

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  top: -13px;
  right: -13px;

  ${size(24)};
  border-radius: 100%;

  color: ${getColor("primary")};
  background: ${getColor("accent")};
  font-weight: 700;
  font-size: 0.7em;
`

const Name = styled.span`
  margin-top: 16px;
  font-weight: 700;
  font-size: 0.8em;
  text-align: center;
  white-space: nowrap;

  padding: 8px;
  background: ${getTransparency("strongNegative")};
  border-radius: 4px;
`

export function TreeNode(props: TreeNodeProps) {
  const { building, count, className, onGetElement = () => {} } = props
  const product = resources[building.product]

  return (
    <Container className={className}>
      <Inner ref={onGetElement}>
        <Image
          src={join(
            __webpack_public_path__,
            `/img/resources/${slugify(product.name)}.png`,
          )}
        />
        <Counter>{count}x</Counter>
      </Inner>
      <Name>{building.name}</Name>
    </Container>
  )
}
