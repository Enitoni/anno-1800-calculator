import { ResourceName } from "./ResourceName"

export type ResourceType = "basic" | "luxury" | "raw" | "material"

export type Resource = {
  type: ResourceType
  name: string
  costs?: ResourceName[]
}
