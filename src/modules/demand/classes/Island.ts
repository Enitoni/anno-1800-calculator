import { observable, computed } from "mobx"
import { ResidenceName } from "../types/ResidenceName"
import { ResourceName } from "../types/ResourceName"

import * as residences from "../residences"
import * as resources from "../resources"
import * as buildings from "../buildings"
import { Building } from "../types/Building"
import { Residence } from "../types/Residence"
import { Resource, AssociatedResource } from "../types/Resource"
import { calculateDemands } from "../helpers/calculateDemands"
import { getNeedEntries } from "../helpers/getNeedEntries"

export type SerializedIsland = {
  name: string
  population: Record<ResidenceName, number>
}

export const defaultIsland: SerializedIsland = {
  name: "",
  population: {
    farmers: 0,
    workers: 0,
    artisans: 0,
    engineers: 0,
    investors: 0,
    jornaleros: 0,
    obreros: 0,
  },
}

export class Island {
  @observable public name: string
  @observable public population: Record<ResidenceName, number>

  constructor(data = defaultIsland) {
    this.name = data.name
    this.population = data.population
  }

  @computed
  public get demand() {
    const needs = getNeedEntries(this.population)
    return calculateDemands(needs)
  }

  @computed
  public get displayName() {
    return this.name || "Island"
  }

  @computed
  public get totalPopulation() {
    return Object.values(this.population).reduce((acc, c) => acc + c)
  }

  public get serialized(): SerializedIsland {
    return {
      name: this.name,
      population: this.population,
    }
  }
}
