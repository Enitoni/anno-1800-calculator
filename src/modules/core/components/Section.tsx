import { PropsWithChildren } from "react"
import styled from "../../theming/custom"
import React from "react"
import { getFontColor } from "../../theming/helpers"

export type SectionProps = PropsWithChildren<{
  className?: string
  label: string
}>

const Container = styled.aside``

const Label = styled.span`
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 16px;

  color: ${getFontColor("muted")};
`

export function Section(props: SectionProps) {
  const { label, children, className } = props

  return (
    <Container className={className}>
      <Label>{label}</Label>
      {children}
    </Container>
  )
}
