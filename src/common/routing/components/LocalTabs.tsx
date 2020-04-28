import React, { useState, PropsWithChildren } from "react"
import { Tab, tabContext } from "../context/tabContext"

export type TabContextProps = PropsWithChildren<{
  tabs: Tab[]
}>

export function LocalTabs(props: TabContextProps) {
  const [selected, setSelected] = useState(0)
  const { tabs, children } = props

  const context = {
    select: (index: number) => setSelected(index),
    selected,
    tabs,
  }

  return <tabContext.Provider value={context}>{children}</tabContext.Provider>
}
