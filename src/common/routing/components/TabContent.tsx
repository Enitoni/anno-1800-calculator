import { useContext } from "react"
import { tabContext } from "../context/tabContext"
import React from "react"

export function TabContent() {
  const context = useContext(tabContext)
  const tab = context.tabs[context.selected]

  if (!tab) {
    return <span>Um, not sure how you managed to break this.</span>
  }

  return tab.render()
}
