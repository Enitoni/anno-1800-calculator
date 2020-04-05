import { StoreManager } from "./classes/StoreManager"
import { StoreMapReturn } from "./types/StoreMapReturn"

import { routingStore } from "../routing/stores/routingStore"
import { demandStore } from "../../modules/demand/stores/demandStore"
import { modalStore } from "../modal/stores/modalStore"

const stores = {
  routingStore,
  demandStore,
  modalStore,
}

export type Stores = StoreMapReturn<typeof stores>
export const createManager = () => new StoreManager<Stores>(stores)
