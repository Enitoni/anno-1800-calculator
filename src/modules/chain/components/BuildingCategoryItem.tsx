import { ChainCategory } from "../types/ChainCategory"
import styled from "../../theming/custom"
import { size } from "polished"
import React, { useContext } from "react"
import { join } from "path"
import { slugify } from "../../../common/lang/string/slugify"
import { BuildingItem } from "./BuildingItem"
import { SVGIcon, SVGIconWithProps } from "../../../common/icons/components/SVGIcon"
import { selectedCategoryContext } from "../contexts/selectedCategoryContext"
import { getFontColor } from "../../theming/helpers"

export type BuildingCategoryItemProps = {
  category: ChainCategory
}

const Chevron = styled(SVGIcon as SVGIconWithProps<{ turned: boolean }>)`
  ${size(24)};
  ${(props) => (props.turned ? `transform: rotate(90deg);` : ``)}

  fill: ${getFontColor("muted")};
  transition: 200ms ease all;
`

const Container = styled.div`
  &:hover ${Chevron} {
    fill: ${getFontColor("normal")};
  }
`

const Header = styled.div`
  padding: 12px 0px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

const Image = styled.img`
  ${size(24)};
  border-radius: 100%;
`

const Name = styled.span`
  margin-left: 16px;
  font-weight: 600;

  flex: 1;
`

const List = styled.div<{ hidden: boolean }>`
  margin-left: 16px;

  ${(props) => (props.hidden ? `display: hidden;` : ``)}
`

export function BuildingCategoryItem(props: BuildingCategoryItemProps) {
  const { category } = props
  const { residence, buildings } = category

  const context = useContext(selectedCategoryContext)
  if (!context) throw new Error("Context undefined")

  const active = context.category === category

  return (
    <Container onClick={() => context.select(category)}>
      <Header>
        <Image
          src={join(
            __webpack_public_path__,
            `/img/residences/${slugify(residence.name)}.png`,
          )}
        />
        <Name>{residence.name}</Name>
        <Chevron turned={active} name="chevron" />
      </Header>
      <List hidden={!active}>
        {buildings.map((b) => (
          <BuildingItem key={b.name} building={b} />
        ))}
      </List>
    </Container>
  )
}
