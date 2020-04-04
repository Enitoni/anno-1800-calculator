export type ResourceType = "basic" | "luxury" | "raw" | "material"

export type Resource = {
  type: ResourceType
  name: string
  costs?: Resource[]
}
