import { PropsWithChildren } from "react"
import styled from "../../../modules/theming/custom"
import { getColor } from "../../../modules/theming/helpers"
import React from "react"

export type FormFieldProps = PropsWithChildren<{
  label: string
  className?: string
}>

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Label = styled.label`
  font-size: 0.8em;
  font-weight: 700;
  text-transform: uppercase;

  color: ${getColor("accent")};
  margin-bottom: 8px;
`

export function FormField(props: FormFieldProps) {
  const { label, className, children } = props

  return (
    <Container className={className}>
      <Label>{label}</Label>
      {children}
    </Container>
  )
}
