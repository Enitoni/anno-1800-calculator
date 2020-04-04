import { Theme } from "../../../modules/theming/types/Theme"
import { FIELDSET_ELEMENT_HEIGHT } from "../constants"
import { css } from "../../../modules/theming/custom"

export const inputStyle = (props: { theme: Theme }) => {
  const { theme } = props

  return css`
    &:hover {
      border-color: ${theme.transparencies.lightPositive};
    }

    &:focus {
      outline: none;
      border-color: ${theme.colors.accent};
    }

    border: solid 2px transparent;
    background: ${theme.colors.primary};

    padding: 12px;
    height: ${FIELDSET_ELEMENT_HEIGHT};

    border-radius: 4px;

    transition: 200ms ease;
    transition-property: border-color;
  `
}
