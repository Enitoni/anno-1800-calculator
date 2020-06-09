import { TraversedBuilding } from "../../types/TraversedBuilding"
import styled from "../../../theming/custom"
import React, { useState, useRef } from "react"
import { NodeGroup } from "./NodeGroup"

export type BuildingTreeGraphProps = {
  tree: TraversedBuilding
}

const Container = styled.div`
  width: 100%;
  margin-top: -32px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export function BuildingTreeGraph(props: BuildingTreeGraphProps) {
  const { tree } = props

  return <Container>{<NodeGroup tree={tree} />}</Container>
}
