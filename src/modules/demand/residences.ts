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
