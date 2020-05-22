import { ResidenceName } from "./ResidenceName"
import { ResourceName } from "./ResourceName"

export type BuildingCost = {
  resource: ResourceName
  amount: number
}

export type Building = {
  name: string
  processingTime: number
  product: ResourceName
  ingredients?: ResourceName[]
  costs: BuildingCost[]
  staff: {
    residence: ResidenceName
    amount: number
  }
  price: {
    construction: number
    maintenance: number
  }
}
