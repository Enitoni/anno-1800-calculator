import React, { PropsWithChildren } from "react"
import styled from "../../theming/custom"
import { getColor } from "../../theming/helpers"

export type ExternalLinkProps = PropsWithChildren<{
  to: string
}>

const Container = styled.a`
  color: ${getColor("accent")};

  &:hover {
    text-decoration: underline;
  }
`

export function ExternalLink(props: ExternalLinkProps) {
  const { to, children } = props

  return (
    <Container target="_blank" rel="noopener" href={to}>
      {children}
    </Container>
  )
}
