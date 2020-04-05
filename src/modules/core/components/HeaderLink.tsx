import { IconType } from "../../../common/icons/types/IconType"
import styled from "../../theming/custom"
import React from "react"
import { useRouteLink } from "../../../common/routing/hooks/useRouteLink"
import { SVGIcon } from "../../../common/icons/components/SVGIcon"
import { size } from "polished"
import { getFontColor, getColor } from "../../theming/helpers"
import { css } from "styled-components"
import { HEADER_HEIGHT } from "../constants"

export type HeaderLinkProps = {
  to: string
  label: string
  icon: IconType
}

const Label = styled.span`
  font-size: 0.8em;
  font-weight: 800;
  text-transform: uppercase;

  margin-left: 8px;
  color: ${getFontColor("muted")};

  transition: 200ms ease color;
`

const Icon = styled(SVGIcon)`
  ${size(16)}
  fill: ${getFontColor("muted")};
  transition: 200ms ease fill;
`

const Container = styled.a<{ active: boolean }>`
  height: ${HEADER_HEIGHT}px;

  display: flex;
  align-items: center;

  margin-left: 24px;

  ${(props) => {
    if (!props.active) {
      return css`
        &:hover ${Label} {
          color: ${getFontColor("normal")};
        }

        &:hover ${Icon} {
          fill: ${getFontColor("normal")};
        }
      `
    }

    return css`
      pointer-events: none;

      ${Label} {
        color: ${getColor("accent")};
      }

      ${Icon} {
        fill: ${getColor("accent")};
      }
    `
  }}
`

export function HeaderLink(props: HeaderLinkProps) {
  const { to, label, icon } = props
  const [active, click] = useRouteLink(to)

  return (
    <Container active={active} href={to} onClick={click}>
      <Icon name={icon} />
      <Label>{label}</Label>
    </Container>
  )
}
