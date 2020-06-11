import { Building } from "../../game/types/Building"

export type TraversedBuilding = {
  count: number
  building: Building
  children: TraversedBuilding[]
}
