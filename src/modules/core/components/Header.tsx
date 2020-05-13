import styled from "../../theming/custom"
import { getColor } from "../../theming/helpers"
import React from "react"
import { HeaderLink } from "./HeaderLink"
import { CONTENT_WIDTH, HEADER_HEIGHT } from "../constants"

const Container = styled.header`
  height: ${HEADER_HEIGHT}px;
  background: ${getColor("primary")};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  padding: 0px 16px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${CONTENT_WIDTH}px;
`

const Title = styled.h1`
  font-size: 1.1em;
  font-weight: 700;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

export function Header() {
  return (
    <Container>
      <Content>
        <Title>Anno 1800 calculator</Title>
        <Nav>
          <HeaderLink icon="home" to="/" label="Home" />
          <HeaderLink icon="box" to="/demands" label="Resident Demands" />
          <HeaderLink icon="link" to="/chains" label="Production Chains" />
        </Nav>
      </Content>
    </Container>
  )
}
