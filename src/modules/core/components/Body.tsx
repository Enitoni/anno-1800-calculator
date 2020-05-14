import React from "react"
import styled from "../../theming/custom"
import { HEADER_HEIGHT, CONTENT_WIDTH } from "../constants"
import { Route, useRouter } from "../../../common/routing/hooks/useRouter"
import { DemandPage } from "../../demand/components/DemandPage"
import { ChainPage } from "../../chain/components/ChainPage"

const Container = styled.div`
  margin-top: ${HEADER_HEIGHT}px;

  display: flex;
  justify-content: center;
  padding: 0px 16px;
  padding-bottom: 32px;
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
  {
    name: "chains",
    pattern: "/chains",
    render: () => <ChainPage />,
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
