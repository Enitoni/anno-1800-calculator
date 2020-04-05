import React from "react"
import styled from "../../../modules/theming/custom"
import { getTransparency, getColor } from "../../../modules/theming/helpers"
import { PropsWithChildren } from "react"

const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
`

export function Table(props: PropsWithChildren<{}>) {
  return <TableContainer {...props} />
}

Table.Head = styled.thead``

Table.HeadColumn = styled.th`
  text-align: start;

  padding: 8px 0px;
  color: ${getColor("accent")};

  font-size: 0.8em;
  font-weight: 800;
  text-transform: uppercase;
`

Table.Body = styled.tbody``

Table.Row = styled.tr`
  &:last-child > td {
    border-bottom: none;
  }
`

Table.Data = styled.td`
  padding: 8px 0px;
  border-bottom: solid 1px ${getTransparency("lightPositive")};
`
