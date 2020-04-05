import { PropsWithChildren } from "react"
import styled from "../../../modules/theming/custom"
import { getTransparency } from "../../../modules/theming/helpers"
import React from "react"

const Container = styled.code`
  background: ${getTransparency("lightNegative")};
  display: block;

  padding: 8px;
  border-radius: 4px;
`

const Pre = styled.pre`
  margin: 0;
`

export function Code(props: PropsWithChildren<{}>) {
  return (
    <Container>
      <Pre>{props.children}</Pre>
    </Container>
  )
}
