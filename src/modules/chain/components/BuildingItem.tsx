import { Building } from "../../game/types/Building"
import styled, { css } from "../../theming/custom"
import React from "react"
import { size } from "polished"
import { join } from "path"
import { slugify } from "../../../common/lang/string/slugify"
import * as resources from "../../game/resources"
import { getTransparency, getFontColor, getColor } from "../../theming/helpers"
import { useStores } from "../../../common/state/hooks/useStores"
import { useObserver } from "mobx-react-lite"
import { toJS } from "mobx"

export type BuildingItemProps = {
  building: Building
}

const Name = styled.span`
  margin-left: 16px;
  color: ${getFontColor("muted")};

  transition: 200ms ease color;
`

const Container = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;

  padding: 8px 0px;

  ${(props) => {
    if (props.active)
      return css`
        ${Name} {
          color: ${getColor("accent")};
        }
      `

    return css`
      cursor: pointer;

      &:hover ${Name} {
        color: ${getFontColor("normal")};
      }
    `
  }}
`

const Image = styled.img`
  ${size(24)};
  border-radius: 100%;
`

export function BuildingItem(props: BuildingItemProps) {
  const { building } = props
  const { chainStore } = useStores()

  const product = resources[building.product]

  return useObserver(() => {
    const active = building === chainStore.selected

    return (
      <Container onClick={() => chainStore.select(building)} active={active}>
        <Image
          src={join(
            __webpack_public_path__,
            `/img/resources/${slugify(product.name)}.png`,
          )}
        />
        <Name>{building.name}</Name>
      </Container>
    )
  })
}
