import { IconType } from "../../../common/icons/types/IconType"
import styled from "../../theming/custom"
import React from "react"
import { SVGIcon } from "../../../common/icons/components/SVGIcon"
import { size } from "polished"
import { getColor } from "../../theming/helpers"

export type PageTitleProps = {
  title: string
  icon: IconType
}

const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 32px;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;

  margin-left: 16px;
`

const Icon = styled(SVGIcon)`
  ${size(24)};
  fill: ${getColor("accent")};
`

export function PageTitle(props: PageTitleProps) {
  const { title, icon } = props

  return (
    <Container>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  )
}
