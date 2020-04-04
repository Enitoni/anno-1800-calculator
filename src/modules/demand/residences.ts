import { Residence } from "./types/Residence"

export const farmer: Residence = {
  name: "Farmer",
  needs: [
    {
      resource: "fish",
      amount: 0.0025,
    },
    {
      resource: "workClothes",
      amount: 0.003076926,
    },
    {
      resource: "schnapps",
      amount: 0.003333336,
    },
  ],
}

export const worker: Residence = {
  name: "Worker",
  needs: [
    {
      resource: "fish",
      amount: 0.0025,
    },
    {
      resource: "workClothes",
      amount: 0.003076926,
    },
    {
      resource: "sausages",
      amount: 0.001000002,
    },
    {
      resource: "bread",
      amount: 0.00090909,
    },
    {
      resource: "soap",
      amount: 0.000416667,
    },
  ],
}
