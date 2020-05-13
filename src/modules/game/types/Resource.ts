import { ResourceName } from "./ResourceName"
import { Building } from "./Building"

export type ResourceType = "basic" | "luxury" | "raw" | "material"

export type Resource = {
  type: ResourceType
  name: string
  costs?: ResourceName[]
}

export type AssociatedResource = Resource & {
  building: Building
}
