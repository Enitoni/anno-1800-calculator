import { ChainCategory } from "./types/ChainCategory"
import { ResidenceName } from "../game/types/ResidenceName"
import { BuildingName } from "../game/types/BuildingName"

import * as buildings from "../game/buildings"
import * as residences from "../game/residences"

export type BuildingCategoryReference = {
  residence: ResidenceName
  buildings: BuildingName[]
}

/** This needs to be hardcoded for reasons I do not know */
export const categories: ChainCategory[] = ([
  {
    residence: "farmers",
    buildings: ["oldSawmill", "schnappsDistillery", "frameworkKnitters"],
  },
  {
    residence: "workers",
    buildings: [
      "oldBrickFactory",
      "slaughterhouse",
      "oldSailmakers",
      "bakery",
      "soapFactory",
      "steelworks",
      "weaponFactory",
      "brewery",
    ],
  },
  {
    residence: "artisans",
    buildings: ["windowMakers", "cannery", "sewingMachineFactory", "furDealer"],
  },
  {
    residence: "engineers",
    buildings: [
      "concreteFactory",
      "spectacleFactory",
      "heavyWeaponsFactory",
      "bicycleFactory",
      "motorAssemblyLine",
      "clockmakers",
      "lightBulbFactory",
    ],
  },
  {
    residence: "investors",
    buildings: ["champagneCellar", "jewellers", "gramophoneFactory", "cabAssemblyLine"],
  },
  {
    residence: "jornaleros",
    buildings: [
      "sawmill",
      "friedPlantainKitchen",
      "sailmakers",
      "rumDistillery",
      "ponchoDarner",
    ],
  },
  {
    residence: "obreros",
    buildings: [
      "brickFactory",
      "tortillaMaker",
      "coffeeRoaster",
      "bombinWeaver",
      "cigarFactory",
      "chocolateFactory",
    ],
  },
  {
    residence: "explorers",
    buildings: ["pemmicanCookhouse", "sleepingBagFactory"],
  },
  {
    residence: "technicians",
    buildings: ["parkaFactory", "huskySledFactory"],
  },
] as BuildingCategoryReference[]).map((reference) => ({
  residence: residences[reference.residence],
  buildings: reference.buildings.map((b) => buildings[b]),
}))
