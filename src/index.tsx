import React from "react"
import ReactDOM from "react-dom"
import { App } from "./modules/core/components/App"

import { createManager } from "./common/state/manager"
import { ManagerContext } from "./common/state/contexts/ManagerContext"

async function main() {
  const manager = createManager()
  const element = document.querySelector(".app")

  await manager.init()

  ReactDOM.render(
    <ManagerContext.Provider value={manager}>{<App />}</ManagerContext.Provider>,
    element,
  )
}

main()
