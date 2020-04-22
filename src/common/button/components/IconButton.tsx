import styled, { css } from "../../../modules/theming/custom"
import { Button } from "./Button"
import { size } from "polished"
import { getColor, getFontColor } from "../../../modules/theming/helpers"

export const IconButton = styled(Button)`
  display: inline-flex;

  justify-content: center;
  align-items: center;

  ${size(16)};

  transition: 200ms ease opacity;

  > .icon {
    ${size(16)};
    fill: ${getFontColor("muted")};
    transition: 200ms ease fill;
  }

  &:hover {
    > .icon {
      fill: ${getFontColor("normal")};
    }
  }

  > .label {
    display: none;
  }

  ${(props) =>
    props.disabled
      ? css`
          pointer-events: none;
          opacity: 0.3;
        `
      : undefined}
`
