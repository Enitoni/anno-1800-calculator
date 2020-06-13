import React from "react"
import styled from "../../../../modules/theming/custom"

import { getColor } from "../../../../modules/theming/helpers"
import { PropsWithChildren } from "react"

const Root = styled.aside`
  min-width: 458px;
  background: ${getColor("primary")};
  border-radius: 3px;
`

export function Container(props: PropsWithChildren<{ className?: string }>) {
  const { children, className } = props

  return <Root className={className}>{children}</Root>
}
