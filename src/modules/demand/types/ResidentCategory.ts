import { ResourceName } from "./ResourceName"

export type ResidentNeedEntry = {
  resource: ResourceName
  amount: number
}

export type ResidentCategory = {
  name: string
  needs: ResidentNeedEntry[]
}
