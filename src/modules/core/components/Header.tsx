import styled from "../../theming/custom"
import { getColor } from "../../theming/helpers"
import React from "react"

const Container = styled.header`
  height: 55px;
  background: ${getColor("primary")};

  display: flex;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  padding: 0px 16px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`

export function Header() {
  return (
    <Container>
      <Title>Anno calculator</Title>
    </Container>
  )
}
