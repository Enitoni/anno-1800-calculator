import { ResidenceName } from "./ResidenceName"
import { ResourceName } from "./ResourceName"
import { BuildingName } from "./BuildingName"

export type BuildingCost = {
  resource: ResourceName
  amount: number
}

export type Building = {
  name: string
  processingTime: number
  product: ResourceName
  children?: BuildingName[]
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
