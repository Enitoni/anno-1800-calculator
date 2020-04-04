import { PropsWithChildren } from "react"
import styled from "../../../modules/theming/custom"
import { getColor } from "../../../modules/theming/helpers"
import React from "react"

export type FormFieldProps = PropsWithChildren<{
  label: string
}>

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 0.8em;
  font-weight: 700;
  text-transform: uppercase;

  color: ${getColor("accent")};
  margin-bottom: 8px;
`

export function FormField(props: FormFieldProps) {
  const { label, children } = props

  return (
    <Container>
      <Label>{label}</Label>
      {children}
    </Container>
  )
}
