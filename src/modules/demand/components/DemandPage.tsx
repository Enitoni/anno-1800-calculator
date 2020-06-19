import React from "react"
import { PageTitle } from "../../core/components/PageTitle"
import styled from "../../theming/custom"
import { Section } from "../../core/components/Section"
import { SIDEBAR_WIDTH } from "../../core/constants"
import { PrimaryButton } from "../../../common/button/components/PrimaryButton"
import { useObserver } from "mobx-react-lite"
import { ButtonList } from "../../../common/button/components/ButtonList"
import { useManager } from "../../../common/state/hooks/useManager"
import { importIslands } from "../actions/importIslands"
import { saveToFile } from "../../../common/dom/helpers/saveToFile"
import { SecondaryButton } from "../../../common/button/components/SecondaryButton"
import { clearAllIslands } from "../actions/clearAllIslands"
import { IslandView } from "./IslandView"
import { IslandCollectionItem } from "./IslandCollectionItem"
import { LocalTabs } from "../../../common/routing/components/LocalTabs"
import { TabContent } from "../../../common/routing/components/TabContent"
import { Tab } from "../../../common/routing/context/tabContext"
import { TabRow } from "../../../common/routing/components/TabRow"
import { TotalView } from "./TotalView"
import { CollectionView } from "./CollectionView"
import { addCollection } from "../actions/addCollection"

const Container = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH}px;
  flex-shrink: 0;
`

const CalculationList = styled.div`
  margin-top: -16px;
  margin-bottom: 8px;
`

const IslandSection = styled(Section)`
  margin-bottom: 32px;
`

const Content = styled.div`
  margin-left: 64px;
  flex: 1;
`

const ContentTabs = styled(TabRow)`
  margin-bottom: 24px;
`

export function DemandPage() {
  const manager = useManager()
  const { islandStore } = manager.stores

  return useObserver(() => {
    const { selected } = islandStore
    const collection = islandStore.getCollectionByIsland(selected)

    const tabs: Tab[] = [
      {
        name: "island",
        label: `${selected.displayName} Demands`,
        render: () => <IslandView island={selected} />,
      },
      {
        name: "collection",
        label: `${collection.displayName} Demands`,
        render: () => <CollectionView collection={collection} />,
      },
      {
        name: "total",
        label: "Total Demands",
        render: () => <TotalView />,
      },
    ]

    return (
      <>
        <PageTitle title="Resident demands" icon="box">
          <ButtonList horizontal>
            <PrimaryButton
              icon="save"
              label="Export"
              onClick={() =>
                saveToFile("demand.json", JSON.stringify(islandStore.collections))
              }
            />
            <PrimaryButton
              icon="folder"
              label="Import"
              onClick={() => importIslands(manager)}
            />
            <SecondaryButton
              icon="trashcan"
              label="Clear all"
              onClick={() => clearAllIslands(manager)}
            />
          </ButtonList>
        </PageTitle>
        <Container>
          <Sidebar>
            <IslandSection label="Your islands">
              <CalculationList>
                {islandStore.collections.map((c, i) => (
                  <IslandCollectionItem key={c.name + i} collection={c} />
                ))}
              </CalculationList>
              <PrimaryButton
                stretch
                onClick={() => addCollection(manager)}
                label="New collection"
                icon="circledPlus"
              />
            </IslandSection>
          </Sidebar>
          <Content>
            <LocalTabs tabs={tabs}>
              <ContentTabs />
              <TabContent />
            </LocalTabs>
          </Content>
        </Container>
      </>
    )
  })
}
