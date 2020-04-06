import styled from "../../../modules/theming/custom"
import { Button } from "./Button"
import { FIELDSET_ELEMENT_HEIGHT } from "../../input/constants"
import { getColor, getFontColor, getTransparency } from "../../../modules/theming/helpers"
import { size } from "polished"
import { css } from "styled-components"

export const SecondaryButton = styled(Button)`
  display: inline-flex;

  justify-content: center;
  align-items: center;

  padding: 16px;
  height: ${FIELDSET_ELEMENT_HEIGHT};

  background: ${getTransparency("lightPositive")};
  border-radius: 4px;
  color: ${getFontColor("normal")};

  transition: 200ms ease;
  transition-property: color background;

  > .label {
    font-weight: 700;
    font-size: 0.75em;
    text-transform: uppercase;
  }

  > .icon {
    ${size(16)};
    fill: ${getFontColor("normal")};

    margin-right: 8px;
    transition: 200ms ease fill;
  }

  &:hover {
    background: ${getFontColor("normal")};
    color: ${getColor("primary")};

    > .icon {
      fill: ${getColor("primary")};
    }
  }

  ${(props) =>
    props.disabled
      ? css`
          pointer-events: none;
          opacity: 0.5;
        `
      : undefined}
`
