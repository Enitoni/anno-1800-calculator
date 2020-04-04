import { PropsWithChildren } from "react"
import styled from "../../theming/custom"
import React from "react"
import { getFontColor, getTransparency } from "../../theming/helpers"

export type SectionProps = PropsWithChildren<{
  className?: string
  label: string
}>

const Container = styled.aside``

const Label = styled.span`
  font-size: 0.8em;
  font-weight: 800;
  text-transform: uppercase;

  color: ${getFontColor("muted")};
  display: flex;
  align-items: center;

  &:after {
    flex-grow: 1;
    content: "";
    display: block;
    height: 2px;
    background: ${getTransparency("lightPositive")};
    margin-left: 16px;
  }
`

const Content = styled.div`
  margin-top: 16px;
`

export function Section(props: SectionProps) {
  const { label, children, className } = props

  return (
    <Container className={className}>
      <Label>{label}</Label>
      <Content>{children}</Content>
    </Container>
  )
}
