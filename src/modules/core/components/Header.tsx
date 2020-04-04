import styled from "../../theming/custom"
import { getColor } from "../../theming/helpers"
import React from "react"
import { HeaderLink } from "./HeaderLink"

const Container = styled.header`
  height: 55px;
  background: ${getColor("primary")};

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  padding: 0px 16px;
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

export function Header() {
  return (
    <Container>
      <Title>Anno calculator</Title>
      <Nav>
        <HeaderLink icon="home" to="/" label="Home" />
        <HeaderLink icon="box" to="/resident-demands" label="Demands" />
      </Nav>
    </Container>
  )
}
