import { Building } from "../../game/types/Building"

export type TraversedBuilding = {
  building: Building
  children: TraversedBuilding[]
}
