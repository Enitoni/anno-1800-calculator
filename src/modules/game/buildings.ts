import { Building } from "./types/Building"

export const oldSawmill: Building = {
  name: "Sawmill",
  product: "timber",
  processingTime: 15,
  costs: [],
  children: ["oldLumberjackHut"],
  staff: { residence: "farmers", amount: 10 },
  price: { construction: 100, maintenance: 10 },
}

export const oldLumberjackHut: Building = {
  name: "Lumberjack Hut",
  product: "wood",
  processingTime: 15,
  costs: [],
  staff: { residence: "farmers", amount: 5 },
  price: { construction: 100, maintenance: 10 },
}

export const fishery: Building = {
  name: "Fishery",
  product: "fish",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 2 }],
  staff: { residence: "farmers", amount: 25 },
  price: { construction: 100, maintenance: 40 },
}

export const schnappsDistillery: Building = {
  name: "Schnapps Distillery",
  product: "schnapps",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 2 }],
  children: ["potatoFarm"],
  staff: { residence: "farmers", amount: 50 },
  price: { construction: 100, maintenance: 40 },
}

export const potatoFarm: Building = {
  name: "Potato Farm",
  product: "potatoes",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 2 }],
  staff: { residence: "farmers", amount: 20 },
  price: { construction: 100, maintenance: 20 },
}

export const frameworkKnitters: Building = {
  name: "Framework Knitters",
  product: "workClothes",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 2 }],
  children: ["sheepFarm"],
  staff: { residence: "farmers", amount: 50 },
  price: { construction: 100, maintenance: 50 },
}

export const sheepFarm: Building = {
  name: "Sheep Farm",
  product: "wool",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 2 }],
  staff: { residence: "farmers", amount: 10 },
  price: { construction: 100, maintenance: 20 },
}

export const oldClayPit: Building = {
  name: "Clay Pit",
  product: "clay",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 4 }],
  staff: { residence: "workers", amount: 50 },
  price: { construction: 500, maintenance: 10 },
}

export const oldBrickFactory: Building = {
  name: "Brick Factory",
  product: "bricks",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 8 }],
  children: ["clayPit"],
  staff: { residence: "workers", amount: 25 },
  price: { construction: 500, maintenance: 20 },
}

export const pigFarm: Building = {
  name: "Pig Farm",
  product: "pigs",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 4 }],
  staff: { residence: "workers", amount: 30 },
  price: { construction: 500, maintenance: 40 },
}

export const slaughterhouse: Building = {
  name: "Slaughterhouse",
  product: "sausages",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
  ],
  children: ["pigFarm"],
  staff: { residence: "workers", amount: 50 },
  price: { construction: 500, maintenance: 80 },
}

export const oldSailmakers: Building = {
  name: "Sailmakers",
  product: "sails",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 10 },
  ],
  children: ["sheepFarm"],
  staff: { residence: "workers", amount: 50 },
  price: { construction: 500, maintenance: 75 },
}

export const grainFarm: Building = {
  name: "Grain Farm",
  product: "grain",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 4 }],
  staff: { residence: "farmers", amount: 20 },
  price: { construction: 500, maintenance: 20 },
}

export const flourMill: Building = {
  name: "Flour Mill",
  product: "flour",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
  ],
  children: ["grainFarm"],
  staff: { residence: "farmers", amount: 10 },
  price: { construction: 500, maintenance: 50 },
}

export const bakery: Building = {
  name: "Bakery",
  product: "bread",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
  ],
  children: ["flourMill"],
  staff: { residence: "workers", amount: 50 },
  price: { construction: 500, maintenance: 60 },
}

export const renderingWorks: Building = {
  name: "Rendering Works",
  product: "tallow",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
    { resource: "steelBeams", amount: 4 },
  ],
  children: ["pigFarm"],
  staff: { residence: "workers", amount: 40 },
  price: { construction: 500, maintenance: 40 },
}

export const soapFactory: Building = {
  name: "Soap Factory",
  product: "soap",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
    { resource: "steelBeams", amount: 4 },
  ],
  children: ["renderingWorks"],
  staff: { residence: "workers", amount: 50 },
  price: { construction: 500, maintenance: 50 },
}

export const ironMine: Building = {
  name: "Iron Mine",
  product: "iron",
  processingTime: 15,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
  ],
  staff: { residence: "workers", amount: 50 },
  price: { construction: 500, maintenance: 50 },
}

export const charcoalKiln: Building = {
  name: "Charcoal Kiln",
  product: "coal",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
  ],
  staff: { residence: "workers", amount: 10 },
  price: { construction: 500, maintenance: 20 },
}

export const furnace: Building = {
  name: "Furnace",
  product: "steel",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
  ],
  children: ["ironMine", "charcoalKiln"],
  staff: { residence: "workers", amount: 100 },
  price: { construction: 500, maintenance: 20 },
}

export const steelworks: Building = {
  name: "Steelworks",
  product: "steelBeams",
  processingTime: 45,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 10 },
  ],
  children: ["furnace"],
  staff: { residence: "workers", amount: 200 },
  price: { construction: 500, maintenance: 100 },
}

export const weaponFactory: Building = {
  name: "Weapon Factory",
  product: "weapons",
  processingTime: 90,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 10 },
    { resource: "steelBeams", amount: 8 },
  ],
  children: ["furnace"],
  staff: { residence: "workers", amount: 50 },
  price: { construction: 500, maintenance: 120 },
}

export const malthouse: Building = {
  name: "Malthouse",
  product: "malt",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
    { resource: "steelBeams", amount: 4 },
  ],
  children: ["grainFarm"],
  staff: { residence: "workers", amount: 25 },
  price: { construction: 500, maintenance: 150 },
}

export const hopFarm: Building = {
  name: "Hop Farm",
  product: "hops",
  processingTime: 90,
  costs: [{ resource: "timber", amount: 4 }],
  staff: { residence: "farmers", amount: 20 },
  price: { construction: 500, maintenance: 20 },
}

export const brewery: Building = {
  name: "Brewery",
  product: "beer",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
    { resource: "steelBeams", amount: 4 },
  ],
  children: ["hopFarm", "malthouse"],
  staff: { residence: "workers", amount: 75 },
  price: { construction: 500, maintenance: 200 },
}

export const sandMine: Building = {
  name: "Sand Mine",
  product: "quartzSand",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 6 },
    { resource: "bricks", amount: 5 },
  ],
  staff: { residence: "workers", amount: 25 },
  price: { construction: 2000, maintenance: 120 },
}

export const glassmakers: Building = {
  name: "Glassmakers",
  product: "glass",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 6 },
    { resource: "bricks", amount: 10 },
    { resource: "steelBeams", amount: 8 },
  ],
  children: ["sandMine"],
  staff: { residence: "artisans", amount: 100 },
  price: { construction: 2000, maintenance: 100 },
}

export const windowMakers: Building = {
  name: "Window Makers",
  product: "windows",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 12 },
    { resource: "bricks", amount: 20 },
    { resource: "steelBeams", amount: 16 },
  ],
  children: ["lumberjackHut", "glassmakers"],
  staff: { residence: "artisans", amount: 100 },
  price: { construction: 2000, maintenance: 100 },
}

export const oldCattleFarm: Building = {
  name: "Cattle Farm",
  product: "beef",
  processingTime: 120,
  costs: [{ resource: "timber", amount: 6 }],
  staff: { residence: "artisans", amount: 20 },
  price: { construction: 2000, maintenance: 50 },
}

export const cattleFarm: Building = {
  name: "Cattle Farm",
  product: "beef",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 8 }],
  staff: { residence: "jornaleros", amount: 20 },
  price: { construction: 2500, maintenance: 20 },
}

export const redPepperFarm: Building = {
  name: "Red Pepper Farm",
  product: "redPeppers",
  processingTime: 120,
  costs: [{ resource: "timber", amount: 6 }],
  staff: { residence: "farmers", amount: 10 },
  price: { construction: 2000, maintenance: 50 },
}

export const artisanalKitchen: Building = {
  name: "Artisanal Kitchen",
  product: "goulash",
  processingTime: 120,
  costs: [
    { resource: "timber", amount: 6 },
    { resource: "bricks", amount: 10 },
    { resource: "steelBeams", amount: 8 },
    { resource: "windows", amount: 8 },
  ],
  children: ["oldCattleFarm", "redPepperFarm"],
  staff: { residence: "artisans", amount: 75 },
  price: { construction: 2000, maintenance: 100 },
}

export const cannery: Building = {
  name: "Cannery",
  product: "cannedFood",
  processingTime: 90,
  costs: [
    { resource: "timber", amount: 6 },
    { resource: "bricks", amount: 10 },
    { resource: "steelBeams", amount: 8 },
    { resource: "windows", amount: 8 },
  ],
  children: ["ironMine", "artisanalKitchen"],
  staff: { residence: "artisans", amount: 75 },
  price: { construction: 2000, maintenance: 100 },
}

export const coalMine: Building = {
  name: "Coal Mine",
  product: "coal",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 4 },
    { resource: "bricks", amount: 5 },
  ],
  staff: { residence: "workers", amount: 50 },
  price: { construction: 500, maintenance: 50 },
}

export const sewingMachineFactory: Building = {
  name: "Sewing Machine Factory",
  product: "sewingMachines",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 6 },
    { resource: "bricks", amount: 10 },
    { resource: "steelBeams", amount: 8 },
    { resource: "windows", amount: 8 },
  ],
  children: ["lumberjackHut", "furnace"],
  staff: { residence: "artisans", amount: 150 },
  price: { construction: 500, maintenance: 500 },
}

export const sugarCanePlantation: Building = {
  name: "Sugar Cane Plantation",
  product: "sugarCane",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 6 }],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 500, maintenance: 5 },
}

export const rumDistillery: Building = {
  name: "Rum Distillery",
  product: "rum",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 6 }],
  children: ["lumberjackHut", "sugarCanePlantation"],
  staff: { residence: "jornaleros", amount: 50 },
  price: { construction: 500, maintenance: 30 },
}

export const huntingCabin: Building = {
  name: "Hunting Cabin",
  product: "furs",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 6 }],
  staff: { residence: "farmers", amount: 10 },
  price: { construction: 2000, maintenance: 50 },
}

export const furDealer: Building = {
  name: "Fur Dealer",
  product: "furCoats",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 6 },
    { resource: "bricks", amount: 10 },
    { resource: "steelBeams", amount: 8 },
    { resource: "windows", amount: 5 },
  ],
  children: ["huntingCabin", "cottonMill"],
  staff: { residence: "artisans", amount: 200 },
  price: { construction: 2000, maintenance: 500 },
}

export const limestoneQuarry: Building = {
  name: "Limestone Quarry",
  product: "cement",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
  ],
  staff: { residence: "workers", amount: 25 },
  price: { construction: 5000, maintenance: 250 },
}

export const concreteFactory: Building = {
  name: "Concrete Factory",
  product: "reinforcedConcrete",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 20 },
    { resource: "bricks", amount: 30 },
    { resource: "steelBeams", amount: 24 },
    { resource: "windows", amount: 25 },
  ],
  children: ["furnace", "limestoneQuarry"],
  staff: { residence: "engineers", amount: 125 },
  price: { construction: 10000, maintenance: 500 },
}

export const oldOilRefinery: Building = {
  name: "Oil Refinery",
  product: "oil",
  processingTime: 15,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  staff: { residence: "workers", amount: 100 },
  price: { construction: 5000, maintenance: 250 },
}

export const oldOilWell: Building = {
  name: "Oil Well",
  product: "oil",
  processingTime: 15,
  costs: [
    { resource: "timber", amount: 6 },
    { resource: "bricks", amount: 10 },
    { resource: "steelBeams", amount: 8 },
  ],
  staff: { residence: "workers", amount: 100 },
  price: { construction: 4000, maintenance: 250 },
}

// The following buildings have been commented out because of complexity reasons

/*
export const oilPowerPlant: Building = {
  name: "Oil Power Plant",
  product: "electricity",
  processingTime: -1,
  costs: [
    { resource: "timber", amount: 30 },
    { resource: "bricks", amount: 50 },
    { resource: "steelBeams", amount: 40 },
    { resource: "windows", amount: 30 },
    { resource: "reinforcedConcrete", amount: 25 },
  ],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 25000, maintenance: 400 },
}

export const coalPowerPlant: Building = {
  name: "Coal Power Plant",
  product: "electricity",
  processingTime: -1,
  costs: [
    { resource: "timber", amount: 30 },
    { resource: "bricks", amount: 50 },
    { resource: "steelBeams", amount: 40 },
    { resource: "windows", amount: 30 },
    { resource: "reinforcedConcrete", amount: 25 },
  ],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 25000, maintenance: 150 },
}
*/

export const zincMine: Building = {
  name: "Zinc Mine",
  product: "zinc",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  staff: { residence: "workers", amount: 25 },
  price: { construction: 5000, maintenance: 250 },
}

export const copperMine: Building = {
  name: "Copper Mine",
  product: "copper",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  staff: { residence: "workers", amount: 25 },
  price: { construction: 5000, maintenance: 250 },
}

export const brassSmeltery: Building = {
  name: "Brass Smeltery",
  product: "brass",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  children: ["zincMine", "copperMine"],
  staff: { residence: "workers", amount: 25 },
  price: { construction: 5000, maintenance: 250 },
}

export const spectacleFactory: Building = {
  name: "Spectacle Factory",
  product: "glasses",
  processingTime: 90,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  children: ["glassmakers", "brassSmeltery"],
  staff: { residence: "engineers", amount: 100 },
  price: { construction: 5000, maintenance: 1000 },
}

export const motorAssemblyLine: Building = {
  name: "Motor Assembly Line",
  product: "steamMotors",
  processingTime: 90,
  costs: [
    { resource: "timber", amount: 16 },
    { resource: "bricks", amount: 30 },
    { resource: "steelBeams", amount: 24 },
    { resource: "windows", amount: 20 },
    { resource: "reinforcedConcrete", amount: 20 },
  ],
  children: ["furnace", "brassSmeltery"],
  staff: { residence: "engineers", amount: 250 },
  price: { construction: 10000, maintenance: 5500 },
}

export const bicycleFactory: Building = {
  name: "Bicycle Factory",
  product: "highWheelers",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  children: ["furnace", "caoutchoucPlantation"],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 5000, maintenance: 1625 },
}

export const goldMine: Building = {
  name: "Gold Mine",
  product: "goldOre",
  processingTime: 150,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  staff: { residence: "obreros", amount: 100 },
  price: { construction: 5000, maintenance: 250 },
}

export const goldsmiths: Building = {
  name: "Goldsmiths",
  product: "gold",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  children: ["goldMine", "charcoalKiln"],
  staff: { residence: "engineers", amount: 125 },
  price: { construction: 5000, maintenance: 750 },
}

export const clockmakers: Building = {
  name: "Clockmakers",
  product: "pocketWatches",
  processingTime: 90,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  children: ["goldsmiths", "glassmakers"],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 10000, maintenance: 1700 },
}

export const filamentFactory: Building = {
  name: "Filament Factory",
  product: "filament",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  children: ["charcoalKiln"],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 5000, maintenance: 750 },
}

export const lightBulbFactory: Building = {
  name: "Light Bulb Factory",
  product: "lightBulbs",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  children: ["filamentFactory", "glassmakers"],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 10000, maintenance: 1250 },
}

export const saltpeterWorks: Building = {
  name: "Saltpeter Works",
  product: "saltpeter",
  processingTime: 120,
  costs: [
    { resource: "timber", amount: 10 },
    { resource: "bricks", amount: 20 },
    { resource: "steelBeams", amount: 16 },
  ],
  staff: { residence: "workers", amount: 25 },
  price: { construction: 10000, maintenance: 500 },
}

export const dynamiteFactory: Building = {
  name: "Dynamite Factory",
  product: "dynamite",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 10 },
    { resource: "bricks", amount: 20 },
    { resource: "steelBeams", amount: 16 },
    { resource: "windows", amount: 15 },
    { resource: "reinforcedConcrete", amount: 15 },
  ],
  children: ["renderingWorks", "saltpeterWorks"],
  staff: { residence: "engineers", amount: 250 },
  price: { construction: 10000, maintenance: 1000 },
}

export const heavyWeaponsFactory: Building = {
  name: "Heavy Weapons Factory",
  product: "advancedWeapons",
  processingTime: 120,
  costs: [
    { resource: "timber", amount: 20 },
    { resource: "bricks", amount: 40 },
    { resource: "steelBeams", amount: 32 },
    { resource: "windows", amount: 30 },
    { resource: "reinforcedConcrete", amount: 30 },
  ],
  children: ["dynamiteFactory", "furnace"],
  staff: { residence: "engineers", amount: 250 },
  price: { construction: 25000, maintenance: 5000 },
}

export const vineyard: Building = {
  name: "Vineyard",
  product: "grapes",
  processingTime: 120,
  costs: [{ resource: "timber", amount: 10 }],
  staff: { residence: "farmers", amount: 10 },
  price: { construction: 10000, maintenance: 100 },
}

export const champagneCellar: Building = {
  name: "Champagne Cellar",
  product: "champagne",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 10 },
    { resource: "bricks", amount: 20 },
    { resource: "steelBeams", amount: 16 },
    { resource: "windows", amount: 15 },
    { resource: "reinforcedConcrete", amount: 15 },
  ],
  children: ["glassmakers", "vineyard"],
  staff: { residence: "artisans", amount: 150 },
  price: { construction: 25000, maintenance: 1000 },
}

export const jewellers: Building = {
  name: "Jewellers",
  product: "jewelry",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 10 },
    { resource: "bricks", amount: 20 },
    { resource: "steelBeams", amount: 16 },
    { resource: "windows", amount: 15 },
    { resource: "reinforcedConcrete", amount: 15 },
  ],
  children: ["goldsmiths", "pearlFarm"],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 25000, maintenance: 8500 },
}

export const oldMarquetryWorkshop: Building = {
  name: "Marquetry Workshop",
  product: "woodVeneers",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 10 },
    { resource: "bricks", amount: 20 },
    { resource: "steelBeams", amount: 16 },
    { resource: "windows", amount: 15 },
    { resource: "reinforcedConcrete", amount: 15 },
  ],
  children: ["oldLumberjackHut"],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 10000, maintenance: 750 },
}

export const gramophoneFactory: Building = {
  name: "Gramophone Factory",
  product: "gramophones",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 10 },
    { resource: "bricks", amount: 20 },
    { resource: "steelBeams", amount: 16 },
    { resource: "windows", amount: 15 },
    { resource: "reinforcedConcrete", amount: 15 },
  ],
  children: ["marquetryWorkshop", "brassSmeltery"],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 25000, maintenance: 6250 },
}

export const coachmakers: Building = {
  name: "Coachmakers",
  product: "chassis",
  processingTime: 120,
  costs: [
    { resource: "timber", amount: 10 },
    { resource: "bricks", amount: 20 },
    { resource: "steelBeams", amount: 16 },
    { resource: "windows", amount: 15 },
    { resource: "reinforcedConcrete", amount: 15 },
  ],
  children: ["lumberjackHut", "caoutchoucPlantation"],
  staff: { residence: "engineers", amount: 150 },
  price: { construction: 10000, maintenance: 1000 },
}

export const cabAssemblyLine: Building = {
  name: "Cab Assembly Line",
  product: "steamCarriages",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 20 },
    { resource: "bricks", amount: 40 },
    { resource: "steelBeams", amount: 32 },
    { resource: "windows", amount: 30 },
    { resource: "reinforcedConcrete", amount: 30 },
  ],
  children: ["motorAssemblyLine", "coachmakers"],
  staff: { residence: "engineers", amount: 500 },
  price: { construction: 25000, maintenance: 10000 },
}

export const lumberjackHut: Building = {
  name: "Lumberjack Hut",
  product: "wood",
  processingTime: 15,
  costs: [],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 500, maintenance: 10 },
}

export const sawmill: Building = {
  name: "Sawmill",
  product: "timber",
  processingTime: 15,
  costs: [],
  children: ["lumberjackHut"],
  staff: { residence: "jornaleros", amount: 20 },
  price: { construction: 500, maintenance: 10 },
}

export const fishOilFactory: Building = {
  name: "Fish Oil Factory",
  product: "fishOil",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 6 }],
  staff: { residence: "jornaleros", amount: 15 },
  price: { construction: 500, maintenance: 5 },
}

export const plantainPlantation: Building = {
  name: "Plantain Plantation",
  product: "plantains",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 6 }],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 500, maintenance: 5 },
}

export const friedPlantainKitchen: Building = {
  name: "Fried Plantain Kitchen",
  product: "friedPlantains",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 2 }],
  children: ["fishOilFactory", "plantainPlantation"],
  staff: { residence: "jornaleros", amount: 25 },
  price: { construction: 500, maintenance: 15 },
}

export const pearlFarm: Building = {
  name: "Pearl Farm",
  product: "pearls",
  processingTime: 90,
  costs: [{ resource: "timber", amount: 10 }],
  staff: { residence: "jornaleros", amount: 50 },
  price: { construction: 2500, maintenance: 25 },
}

export const cottonPlantation: Building = {
  name: "Cotton Plantation",
  product: "cotton",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 6 }],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 500, maintenance: 5 },
}

export const cottonMill: Building = {
  name: "Cotton Mill",
  product: "cottonFabric",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 6 }],
  children: ["cottonPlantation"],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 500, maintenance: 10 },
}

export const sailmakers: Building = {
  name: "Sailmakers",
  product: "sails",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 8 }],
  children: ["cottonMill"],
  staff: { residence: "jornaleros", amount: 20 },
  price: { construction: 500, maintenance: 15 },
}

export const alpacaFarm: Building = {
  name: "Alpaca Farm",
  product: "alpacaWool",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 6 }],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 500, maintenance: 5 },
}

export const ponchoDarner: Building = {
  name: "Poncho Darner",
  product: "ponchos",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 6 }],
  children: ["alpacaFarm"],
  staff: { residence: "jornaleros", amount: 30 },
  price: { construction: 500, maintenance: 15 },
}

export const caoutchoucPlantation: Building = {
  name: "Caoutchouc Plantation",
  product: "caoutchouc",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 8 }],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 2500, maintenance: 25 },
}

export const clayPit: Building = {
  name: "Clay Pit",
  product: "clay",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 4 }],
  staff: { residence: "obreros", amount: 100 },
  price: { construction: 2500, maintenance: 10 },
}

export const brickFactory: Building = {
  name: "Brick Factory",
  product: "bricks",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 8 }],
  children: ["clayPit"],
  staff: { residence: "obreros", amount: 50 },
  price: { construction: 2500, maintenance: 20 },
}

export const cornFarm: Building = {
  name: "Corn Farm",
  product: "corn",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 3 }],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 2500, maintenance: 25 },
}

export const tortillaMaker: Building = {
  name: "Tortilla Maker",
  product: "tortillas",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 3 },
    { resource: "bricks", amount: 2 },
  ],
  children: ["cattleFarm", "cornFarm"],
  staff: { residence: "obreros", amount: 100 },
  price: { construction: 2500, maintenance: 100 },
}

export const coffeePlantation: Building = {
  name: "Coffee Plantation",
  product: "coffeeBeans",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 5 }],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 2500, maintenance: 25 },
}

export const coffeeRoaster: Building = {
  name: "Coffee Roaster",
  product: "coffee",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 5 },
    { resource: "bricks", amount: 3 },
  ],
  children: ["coffeePlantation"],
  staff: { residence: "obreros", amount: 150 },
  price: { construction: 2500, maintenance: 150 },
}

export const feltProducer: Building = {
  name: "Felt Producer",
  product: "felt",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 3 },
    { resource: "bricks", amount: 2 },
  ],
  children: ["alpacaFarm"],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 2500, maintenance: 10 },
}

export const bombinWeaver: Building = {
  name: "Bombin Weaver",
  product: "bowlerHats",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 3 },
    { resource: "bricks", amount: 2 },
  ],
  children: ["cottonMill", "feltProducer"],
  staff: { residence: "obreros", amount: 20 },
  price: { construction: 2500, maintenance: 50 },
}

export const oilRefinery: Building = {
  name: "Oil Refinery",
  product: "oil",
  processingTime: 15,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  staff: { residence: "obreros", amount: 75 },
  price: { construction: 2500, maintenance: 250 },
}

// The following buildings have been commented out because they don't produce anything

/*
export const oilStorage: Building = {
  name: "Oil Storage",
  product: "oilStorage",
  processingTime: 0,
  costs: [
    { resource: "timber", amount: 8 },
    { resource: "bricks", amount: 15 },
    { resource: "steelBeams", amount: 12 },
    { resource: "windows", amount: 10 },
    { resource: "reinforcedConcrete", amount: 10 },
  ],
  price: { construction: 2500, maintenance: 50 },
}

export const smallOilHarbour: Building = {
  name: "Small Oil Harbour",
  product: "oilStorage",
  processingTime: 0,
  costs: [
    { resource: "timber", amount: 20 },
    { resource: "bricks", amount: 25 },
    { resource: "steelBeams", amount: 20 },
    { resource: "windows", amount: 15 },
    { resource: "reinforcedConcrete", amount: 15 },
  ],
  price: { construction: 10000, maintenance: 100 },
}
*/

export const tobaccoPlantation: Building = {
  name: "Tobacco Plantation",
  product: "tobacco",
  processingTime: 120,
  costs: [{ resource: "timber", amount: 10 }],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 2500, maintenance: 25 },
}

export const cigarFactory: Building = {
  name: "Cigar Factory",
  product: "cigars",
  processingTime: 30,
  costs: [
    { resource: "timber", amount: 10 },
    { resource: "bricks", amount: 20 },
  ],
  children: ["tobaccoPlantation", "marquetryWorkshop"],
  staff: { residence: "obreros", amount: 175 },
  price: { construction: 2500, maintenance: 250 },
}

export const marquetryWorkshop: Building = {
  name: "Marquetry Workshop",
  product: "woodVeneers",
  processingTime: 60,
  costs: [
    { resource: "timber", amount: 10 },
    { resource: "bricks", amount: 20 },
  ],
  children: ["lumberjackHut"],
  staff: { residence: "obreros", amount: 100 },
  price: { construction: 2500, maintenance: 100 },
}

export const cocoaPlantation: Building = {
  name: "Cocoa Plantation",
  product: "cocoa",
  processingTime: 60,
  costs: [{ resource: "timber", amount: 6 }],
  staff: { residence: "jornaleros", amount: 10 },
  price: { construction: 500, maintenance: 5 },
}

export const sugarRefinery: Building = {
  name: "Sugar Refinery",
  product: "sugar",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 6 }],
  children: ["sugarCanePlantation"],
  staff: { residence: "obreros", amount: 50 },
  price: { construction: 500, maintenance: 10 },
}

export const chocolateFactory: Building = {
  name: "Chocolate Factory",
  product: "chocolate",
  processingTime: 30,
  costs: [{ resource: "timber", amount: 6 }],
  children: ["sugarRefinery", "cocoaPlantation"],
  staff: { residence: "obreros", amount: 100 },
  price: { construction: 500, maintenance: 50 },
}

export const pemmicanCookhouse: Building = {
  name: "Pemmican Cookhouse",
  product: "pemmican",
  processingTime: 60,
  costs: [],
  children: ["whalingStation", "caribouHuntingCabin"],
  staff: { residence: "explorers", amount: 100 },
  price: { construction: 1000, maintenance: 60 },
}

export const oilLampFactory: Building = {
  name: "Oil Lamp Factory",
  product: "oilLamps",
  processingTime: 60,
  costs: [],
  staff: { residence: "explorers", amount: 250 },
  price: { construction: 2000, maintenance: 200 },
}

export const huskySledFactory: Building = {
  name: "Husky Sled Factory",
  product: "huskySleds",
  processingTime: 60,
  costs: [],
  children: ["sledFrameFactory", "huskyFarm"],
  staff: { residence: "technicians", amount: 750 },
  price: { construction: 5000, maintenance: 650 },
}

export const parkaFactory: Building = {
  name: "Parka Factory",
  product: "parkas",
  processingTime: 90,
  costs: [],
  children: ["sealHuntingDocks", "gooseFarm"],
  staff: { residence: "technicians", amount: 300 },
  price: { construction: 2000, maintenance: 350 },
}

export const whalingStation: Building = {
  name: "Whaling Station",
  product: "whaleOil",
  processingTime: 60,
  costs: [],
  staff: { residence: "explorers", amount: 100 },
  price: { construction: 200, maintenance: 40 },
}

export const caribouHuntingCabin: Building = {
  name: "Caribou Hunting Cabin",
  product: "caribou",
  processingTime: 60,
  costs: [],
  staff: { residence: "explorers", amount: 100 },
  price: { construction: 200, maintenance: 40 },
}

export const sleepingBagFactory: Building = {
  name: "Sleeping Bag Factory",
  product: "sleepingBags",
  processingTime: 60,
  costs: [],
  children: ["sealHuntingDocks", "gooseFarm"],
  staff: { residence: "explorers", amount: 250 },
  price: { construction: 1500, maintenance: 120 },
}

export const sealHuntingDocks: Building = {
  name: "Seal Hunting Docks",
  product: "sealSkin",
  processingTime: 30,
  costs: [],
  staff: { residence: "explorers", amount: 250 },
  price: { construction: 200, maintenance: 60 },
}

export const gooseFarm: Building = {
  name: "Goose Farm",
  product: "gooseFeathers",
  processingTime: 120,
  costs: [],
  staff: { residence: "explorers", amount: 250 },
  price: { construction: 200, maintenance: 70 },
}

export const sledFrameFactory: Building = {
  name: "Sled Frame Factory",
  product: "sledFrames",
  processingTime: 60,
  costs: [],
  children: ["lumberjackHut", "sealHuntingDocks"],
  staff: { residence: "technicians", amount: 750 },
  price: { construction: 3000, maintenance: 450 },
}

export const huskyFarm: Building = {
  name: "Husky Farm",
  product: "huskies",
  processingTime: 120,
  costs: [],
  staff: { residence: "technicians", amount: 750 },
  price: { construction: 3000, maintenance: 150 },
}
