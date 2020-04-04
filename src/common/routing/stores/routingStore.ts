import { InitializableStore } from "../../state/types/InitializableStore"
import { observable } from "mobx"
import { createBrowserHistory } from "history"

export enum HttpStatus {
  OK = 200,
  NotFound = 404,
}

class RoutingStore implements InitializableStore {
  private history = createBrowserHistory()
  public status = HttpStatus.OK

  @observable public location = this.history.location

  public init() {
    this.history.listen((location) => {
      this.location = location
    })
  }

  public push = (path: string) => {
    if (path === this.location.pathname) return
    this.history.push(path)
  }

  public replace = (path: string) => {
    this.history.replace(path)
  }
}

export const routingStore = () => new RoutingStore()
