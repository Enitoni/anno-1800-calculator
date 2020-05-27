import { Building } from "../../game/types/Building"

export type TraversedBuilding = Omit<Building, "children"> & {
  children: TraversedBuilding[]
}
