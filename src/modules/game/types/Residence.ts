import { ResourceName } from "./ResourceName"

export type ResidenceNeed = {
  resource: ResourceName
  amount: number
}

export type Residence = {
  name: string
  needs: ResidenceNeed[]
}
