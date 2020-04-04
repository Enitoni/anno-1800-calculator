import React from "react"
import styled from "../../theming/custom"
import { HEADER_HEIGHT, CONTENT_WIDTH } from "../constants"
import { Route, useRouter } from "../../../common/routing/hooks/useRouter"
import { DemandPage } from "../../demand/components/DemandPage"

const Container = styled.div`
  margin-top: ${HEADER_HEIGHT}px;

  display: flex;
  justify-content: center;
`

const Content = styled.div`
  margin-top: 32px;
  width: ${CONTENT_WIDTH}px;
`

const routes: Route[] = [
  {
    name: "demands",
    pattern: "/demands",
    render: () => <DemandPage />,
  },
]

export function Body() {
  const [name, renderRoute] = useRouter(routes)
  return (
    <Container>
      <Content key={name}>{renderRoute()}</Content>
    </Container>
  )
}
