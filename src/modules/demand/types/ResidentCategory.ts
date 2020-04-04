import { Resource } from "./Resource"

export type ResidentNeedEntry = {
  resource: Resource
  amount: number
}

export type ResidentCategory = {
  name: string
  needs: ResidentNeedEntry[]
}
