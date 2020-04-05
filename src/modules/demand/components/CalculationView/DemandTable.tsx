import { DemandCalculation } from "../../classes/DemandCalculation"
import { useObserver } from "mobx-react-lite"
import { Table } from "../../../../common/dom/components/Table"
import React from "react"

export type DemandTableProps = {
  calculation: DemandCalculation
}

export function DemandTable(props: DemandTableProps) {
  const { calculation } = props

  return useObserver(() => (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeadColumn>Resource</Table.HeadColumn>
          <Table.HeadColumn>Name</Table.HeadColumn>
          <Table.HeadColumn>Consumption</Table.HeadColumn>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {calculation.demand.map((demand, i) => (
          <Table.Row key={demand.name + i}>
            <Table.Data></Table.Data>
            <Table.Data>{demand.name}</Table.Data>
            <Table.Data>{demand.consumption.toFixed(4)}</Table.Data>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ))
}
