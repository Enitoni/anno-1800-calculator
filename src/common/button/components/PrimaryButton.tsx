import styled from "../../../modules/theming/custom"
import { Button } from "./Button"
import { FIELDSET_ELEMENT_HEIGHT } from "../../input/constants"
import { getColor, getFontColor } from "../../../modules/theming/helpers"
import { size } from "polished"

export const PrimaryButton = styled(Button)`
  display: inline-flex;

  justify-content: center;
  align-items: center;

  padding: 16px;
  height: ${FIELDSET_ELEMENT_HEIGHT};

  background: ${getColor("accent")};
  border-radius: 4px;
  color: ${getColor("primary")};

  transition: 200ms ease;
  transition-property: color background;

  > .label {
    font-weight: 700;
    font-size: 0.7em;
    text-transform: uppercase;
  }

  > .icon {
    ${size(16)};
    fill: ${getColor("primary")};

    margin-right: 8px;
  }

  &:hover {
    background: ${getFontColor("normal")};
    color: ${getColor("primary")};
  }
`
