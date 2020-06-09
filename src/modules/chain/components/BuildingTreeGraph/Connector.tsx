import styled from "../../../theming/custom"
import React from "react"
import { useTheme } from "../../../theming/hooks/useTheme"
import { opacify } from "polished"

export type ConnectorProps = {
  className?: string
  from: HTMLElement
  to: HTMLElement
}

const Container = styled.svg``

export function Connector(props: ConnectorProps) {
  const { from, to, className } = props
  const theme = useTheme()

  const fromRect = from.getBoundingClientRect()
  const toRect = to.getBoundingClientRect()

  const top = Math.min(fromRect.top, toRect.top)
  const left = Math.min(fromRect.left, toRect.left)

  const bottom = Math.max(fromRect.bottom, toRect.bottom)
  const right = Math.max(fromRect.right, toRect.right)

  const width = Math.abs(left - right)
  const height = Math.abs(top - bottom)

  const startX = Math.abs(left - fromRect.left) + fromRect.width / 2
  const startY = fromRect.height

  const stopX = Math.abs(left - toRect.left) + toRect.width / 2
  const stopY = Math.abs(fromRect.top - toRect.top)

  const style: React.CSSProperties = {
    position: "absolute",
    top: top + window.scrollY + "px",
    left: left + window.scrollX + "px",
  }

  return (
    <Container style={style} width={width} height={height} className={className}>
      <path
        stroke={theme.transparencies.strongPositive}
        stroke-width="2"
        fill="transparent"
        d={`M ${startX} ${startY} C ${startX} ${startY}, ${stopX} ${stopY}, ${stopX} ${stopY}`}
      />
      <circle fill={theme.graph.dot} cx={startX} cy={startY} r={3} />
      <circle fill={theme.graph.dot} cx={stopX} cy={stopY} r={3} />
    </Container>
  )
}
