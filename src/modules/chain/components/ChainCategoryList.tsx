import React, { useState } from "react"
import { BuildingCategoryItem } from "./BuildingCategoryItem"
import { categories } from "../categories"
import { selectedCategoryContext } from "../contexts/selectedCategoryContext"
import { ChainCategory } from "../types/ChainCategory"

const { Provider } = selectedCategoryContext

export function ChainCategoryList() {
  const [category, setCategory] = useState<ChainCategory | undefined>(undefined)
  const context = { category, select: (c: ChainCategory) => setCategory(c) }

  return (
    <Provider value={context}>
      {categories.map((x) => (
        <BuildingCategoryItem key={x.residence.name} category={x} />
      ))}
    </Provider>
  )
}
