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
import { IslandView } from "./IslandView/IslandView"
import { IslandCollectionItem } from "./IslandCollectionItem"

const Container = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH}px;
  flex-shrink: 0;
`

const CalculationList = styled.div`
  margin-top: -8px;
  margin-bottom: 8px;
`

const SelectedCalculation = styled.div`
  margin-left: 64px;
  flex: 1;
`

export function DemandPage() {
  const manager = useManager()
  const { islandStore } = manager.stores

  const renderSelected = () => {
    const { selected } = islandStore
    if (!selected) return

    return <IslandView island={selected} />
  }

  return useObserver(() => (
    <>
      <PageTitle title="Resident demands" icon="box">
        <ButtonList horizontal>
          <PrimaryButton
            icon="save"
            label="Export"
            onClick={() =>
              saveToFile("calculations.json", JSON.stringify(islandStore.islands))
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
          <Section label="Your islands">
            <CalculationList>
              {islandStore.collections.map((c, i) => (
                <IslandCollectionItem key={c.name + i} collection={c} />
              ))}
            </CalculationList>
            <PrimaryButton
              stretch
              onClick={() => islandStore.add()}
              label="New collection"
              icon="circledPlus"
            />
          </Section>
        </Sidebar>
        <SelectedCalculation>{renderSelected()}</SelectedCalculation>
      </Container>
    </>
  ))
}
