import React from "react"
import { ThemeProvider } from "../../theming/components/ThemeProvider"
import { GlobalStyles } from "../../theming/components/GlobalStyles"
import { Header } from "./Header"
import styled from "../../theming/custom"
import { Body } from "./Body"
import { ModalOverlay } from "../../../common/modal/components/ModalOverlay"

const Main = styled.main`
  display: block;
`

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Main>
        <Header />
        <Body />
      </Main>
      <ModalOverlay />
    </ThemeProvider>
  )
}
