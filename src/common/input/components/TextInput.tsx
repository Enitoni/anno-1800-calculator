import React, { ChangeEvent, ComponentPropsWithoutRef } from "react"
import { getFontColor } from "../../../modules/theming/helpers"
import { inputStyle } from "../styles/inputStyle"
import styled from "../../../modules/theming/custom"

const Container = styled.input`
  font-size: 0.8em;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;

  color: ${getFontColor("normal")};

  &::placeholder {
    font-weight: 600;
    font-style: italic;

    color: ${getFontColor("muted")};
  }

  &:focus {
    outline: none;
  }

  ${(props) => inputStyle(props)}
`

export type TextInputProps = Omit<ComponentPropsWithoutRef<"input">, "onInput"> & {
  placeholder?: string
  value: string
  onInput: (text: string) => void
}

export function TextInput(props: TextInputProps) {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onInput) {
      const { target } = event
      props.onInput(target.value)
    }
  }

  return <Container {...props} onChange={() => {}} onInput={handleInput} />
}
