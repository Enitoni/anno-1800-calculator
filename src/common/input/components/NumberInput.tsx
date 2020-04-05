import { getFontColor, getColor, getTransparency } from "../../../modules/theming/helpers"
import { inputStyle } from "../styles/inputStyle"
import React, { ChangeEvent, WheelEvent } from "react"
import { Button } from "../../button/components/Button"
import { FIELDSET_ELEMENT_HEIGHT } from "../constants"
import { size } from "polished"
import styled, { css } from "../../../modules/theming/custom"
import { clamp } from "../../lang/math/clamp"

const Container = styled.div`
  display: flex;
`

const InputContainer = styled.div``

const Input = styled.input<{ controls: boolean }>`
  font-size: 0.8em;
  font-weight: 600;
  text-align: center;

  color: ${getFontColor("normal")};

  &:focus {
    outline: none;
  }

  ${(props) => inputStyle(props)}

  ${(props) =>
    props.controls
      ? css`
          & {
            border-radius: 0px;
          }
        `
      : undefined}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  width: 100%;
`

const InputButton = styled(Button)<{ first: boolean }>`
  ${size(FIELDSET_ELEMENT_HEIGHT)};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${getColor("primary")};
  padding: 12px;

  > .label {
    font-size: 0.8em;
    font-weight: bold;
  }

  border: solid 2px transparent;

  transition: 200ms ease;
  transition-property: border-color;

  &:hover {
    border-color: ${getTransparency("lightPositive")};
  }

  ${(props) =>
    props.first
      ? css`
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        `
      : css`
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        `}
`

export type NumberInputProps = {
  value: number
  controls?: boolean
  min?: number
  max?: number
  onInput: (n: number) => void
}

export function NumberInput(props: NumberInputProps) {
  const { value = 0, controls = true, min = -Infinity, max = Infinity } = props

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const safeNumber = Number(event.target.value)
    setValueSafely(safeNumber)
  }

  const setValueSafely = (n: number) => {
    setValue(clamp(n, min, max))
  }

  const handleScroll = (event: WheelEvent<HTMLInputElement>) => {
    event.preventDefault()

    const delta = Math.sign(event.deltaY)
    const amount = event.ctrlKey ? 10 : 1

    if (delta > 0) {
      setValueSafely(value - amount)
    } else {
      setValueSafely(value + amount)
    }
  }

  const setValue = (value: number) => {
    if (props.onInput) {
      props.onInput(value)
    }
  }

  return (
    <Container>
      {controls ?? (
        <InputButton first={true} onClick={() => setValue(value - 1)} label="-" />
      )}
      <InputContainer>
        <Input
          type="number"
          value={value}
          onChange={() => {}}
          onWheel={handleScroll}
          onInput={handleInput}
          controls={controls}
        />
      </InputContainer>
      {controls ?? (
        <InputButton first={false} onClick={() => setValue(value + 1)} label="+" />
      )}
    </Container>
  )
}
