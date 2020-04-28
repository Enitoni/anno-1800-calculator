import React from "react"

export type Tab = {
  name: string
  label: string
  render: () => JSX.Element
}

export type TabContext = {
  select: (index: number) => void
  selected: number
  tabs: Tab[]
}

export const tabContext = React.createContext<TabContext>({
  select: () => {},
  selected: 0,
  tabs: [],
})
