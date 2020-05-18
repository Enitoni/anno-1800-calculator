import React, { useState, useEffect } from "react"
import { BuildingCategoryItem } from "./BuildingCategoryItem"
import { categories } from "../categories"
import { selectedCategoryContext } from "../contexts/selectedCategoryContext"
import { ChainCategory } from "../types/ChainCategory"
import { useObserver } from "mobx-react-lite"
import { useStores } from "../../../common/state/hooks/useStores"

const { Provider } = selectedCategoryContext

export function ChainCategoryList() {
  const [category, setCategory] = useState<ChainCategory | undefined>(undefined)
  const context = { category, select: (c: ChainCategory) => setCategory(c) }

  const { chainStore } = useStores()

  const activeCategory = useObserver(() =>
    categories.find((c) => c.buildings.some((b) => b === chainStore.selected)),
  )!

  useEffect(() => {
    setCategory(activeCategory)
  }, [activeCategory])

  return (
    <Provider value={context}>
      {categories.map((x) => (
        <BuildingCategoryItem key={x.residence.name} category={x} />
      ))}
    </Provider>
  )
}
