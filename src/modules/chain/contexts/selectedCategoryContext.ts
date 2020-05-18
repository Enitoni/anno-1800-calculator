import { createContext } from "react"
import { ChainCategory } from "../types/ChainCategory"

export type SelectedCategoryContext = {
  category?: ChainCategory
  select: (c: ChainCategory) => void
}

export const selectedCategoryContext = createContext<SelectedCategoryContext | undefined>(
  undefined,
)
