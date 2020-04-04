import React from "react"

import { ThemeProvider as Provider } from "../custom"
import { darkTheme } from "../themes"

export function ThemeProvider(props: { children: any }) {
  return <Provider theme={darkTheme}>{props.children}</Provider>
}
