import React from "react"
import { getTransparency } from "../../../../modules/theming/helpers"
import styled from "../../../../modules/theming/custom"

const Container = styled.header`
  height: 64px;

  display: flex;
  align-items: center;

  padding: 0px 24px;
  border-bottom: solid 1px ${getTransparency("lightPositive")};
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
`

export type HeaderProps = {
  title: string
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
    </Container>
  )
}
