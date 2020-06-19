import React from "react"
import styled from "../../../../modules/theming/custom"

import { getColor, getTransparency } from "../../../../modules/theming/helpers"
import { PropsWithChildren } from "react"

const Root = styled.aside`
  min-width: 458px;
  background: ${getColor("background")};
  border-radius: 3px;
  border: solid 1px ${getTransparency("lightPositive")};
`

export function Container(props: PropsWithChildren<{ className?: string }>) {
  const { children, className } = props

  return <Root className={className}>{children}</Root>
}
