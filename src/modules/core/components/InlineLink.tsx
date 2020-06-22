import React, { PropsWithChildren } from "react"
import styled from "../../theming/custom"
import { useRouteLink } from "../../../common/routing/hooks/useRouteLink"
import { getColor } from "../../theming/helpers"

export type InlineLinkProps = PropsWithChildren<{
  to: string
}>

const Container = styled.a`
  color: ${getColor("accent")};

  &:hover {
    text-decoration: underline;
  }
`

export function InlineLink(props: InlineLinkProps) {
  const { to, children } = props
  const [, click] = useRouteLink(to)

  return (
    <Container onClick={click} href={to}>
      {children}
    </Container>
  )
}
