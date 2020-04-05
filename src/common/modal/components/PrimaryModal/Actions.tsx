import styled from "../../../../modules/theming/custom"
import { ButtonList } from "../../../button/components/ButtonList"
import { PropsWithChildren } from "react"
import React from "react"

export const Container = styled(ButtonList)`
  justify-content: flex-end;
`

export function Actions(props: PropsWithChildren<{}>) {
  return <Container horizontal>{props.children}</Container>
}
