import React, { useContext } from "react"
import { Tab, tabContext } from "../context/tabContext"
import styled, { css } from "../../../modules/theming/custom"
import { getTransparency, getColor } from "../../../modules/theming/helpers"

const ItemContainer = styled.div<{ active: boolean }>`
  position: relative;

  font-size: 1.1em;
  font-weight: 700;

  padding-bottom: 12px;
  margin-right: 32px;

  &::after {
    content: "";
    position: absolute;

    bottom: 0px;
    left: 0px;
    right: 0px;

    height: 3px;
    border-radius: 5px;

    background: ${getTransparency("lightPositive")};
    transition: 200ms ease background;
  }

  ${(props) => {
    if (props.active)
      return css`
        &::after {
          background: ${getColor("accent")};
        }
      `

    return css`
      &:hover {
        cursor: pointer;
      }

      &:hover::after {
        background: ${getTransparency("strongPositive")};
      }
    `
  }}
`

const Container = styled.div`
  display: flex;
`

export type TabItemProps = {
  tab: Tab
  index: number
}

export type TabRowProps = {
  className?: string
}

export function TabItem(props: TabItemProps) {
  const { tab, index } = props
  const { label } = tab

  const context = useContext(tabContext)
  const active = context.selected === index

  return (
    <ItemContainer onClick={() => context.select(index)} active={active}>
      {label}
    </ItemContainer>
  )
}

export function TabRow(props: TabRowProps) {
  const { className } = props
  const context = useContext(tabContext)

  return (
    <Container className={className}>
      {context.tabs.map((t, i) => (
        <TabItem key={t.name} tab={t} index={i} />
      ))}
    </Container>
  )
}
