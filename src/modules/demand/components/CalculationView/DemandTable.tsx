import { DemandCalculation } from "../../classes/DemandCalculation"
import { useObserver } from "mobx-react-lite"
import { Table } from "../../../../common/dom/components/Table"
import React, { useState } from "react"
import styled from "../../../theming/custom"
import { size } from "polished"
import { slugify } from "../../../../common/lang/string/slugify"
import { getTransparency } from "../../../theming/helpers"
import { TextInput } from "../../../../common/input/components/TextInput"
import { join } from "path"

export type DemandTableProps = {
  calculation: DemandCalculation
}

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  ${size(32)};
  border-radius: 100%;
  padding: 4px;
  background: ${getTransparency("lightPositive")};
`

const Name = styled.span`
  margin-left: 16px;
`

const FilterInput = styled(TextInput)`
  margin-bottom: 8px;
  width: 100%;
`

export function DemandTable(props: DemandTableProps) {
  const { calculation } = props
  const [filter, setFilter] = useState("")

  return useObserver(() => {
    const { demand } = calculation

    if (demand.length === 0) {
      return <span>Tweak the population controls above to see results.</span>
    }

    const filtered = filter
      ? demand.filter((d) => d.name.toLowerCase().includes(filter.toLowerCase()))
      : demand

    return (
      <>
        <FilterInput
          placeholder="Filter results..."
          value={filter}
          onInput={(v) => setFilter(v)}
        />
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeadColumn>Name</Table.HeadColumn>
              <Table.HeadColumn>Consumption</Table.HeadColumn>
              <Table.HeadColumn>Required chains</Table.HeadColumn>
              <Table.HeadColumn>Efficiency</Table.HeadColumn>
              <Table.HeadColumn>Production per chain</Table.HeadColumn>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {filtered.map((demand, i) => (
              <Table.Row key={demand.name + i}>
                <Table.Data>
                  <NameContainer>
                    <Image
                      src={join(
                        __webpack_public_path__,
                        `/img/resources/${slugify(demand.name)}.png`,
                      )}
                    />
                    <Name>{demand.name}</Name>
                  </NameContainer>
                </Table.Data>
                <Table.Data>
                  {demand.consumption.toFixed(4).replace(/\.?0+$/, "")}
                </Table.Data>
                <Table.Data>{demand.requiredChains}x</Table.Data>
                <Table.Data>{demand.chainEffiency.toFixed(2)}%</Table.Data>
                <Table.Data>
                  {demand.productionPerChain.toFixed(4).replace(/\.?0+$/, "")}
                </Table.Data>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </>
    )
  })
}
