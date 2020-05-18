import { StoreManager } from "./classes/StoreManager"
import { StoreMapReturn } from "./types/StoreMapReturn"

import { routingStore } from "../routing/stores/routingStore"
import { islandStore } from "../../modules/demand/stores/islandStore"
import { modalStore } from "../modal/stores/modalStore"
import { chainStore } from "../../modules/chain/stores/chainStore"

const stores = {
  routingStore,
  islandStore,
  chainStore,
  modalStore,
}

export type Stores = StoreMapReturn<typeof stores>
export const createManager = () => new StoreManager<Stores>(stores)
