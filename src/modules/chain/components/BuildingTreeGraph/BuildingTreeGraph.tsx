import { TraversedBuilding } from "../../types/TraversedBuilding"
import styled from "../../../theming/custom"
import React from "react"
import { TreeNode } from "./TreeNode"

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

const Node = styled(TreeNode)`
  max-width: 80px;
  min-height: 125px;
`

const NodeGroup = styled.div`
  margin: 0px;
  margin-top: 48px;
  margin-left: 80px;
  min-width: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    margin-left: 0px;
  }
`

const Children = styled.div`
  display: flex;
`

export function BuildingTreeGraph(props: BuildingTreeGraphProps) {
  const { tree } = props

  const renderChildren = (nodes?: TraversedBuilding[]) => {
    if (!nodes) return null

    return <Children>{nodes.map((node, i) => renderNodeGroup(node, i))}</Children>
  }

  const renderNodeGroup = (node: TraversedBuilding, i = 0) => {
    const { building, children } = node

    return (
      <NodeGroup key={i}>
        <Node count={4} building={building} />
        {renderChildren(children)}
      </NodeGroup>
    )
  }

  return <Container>{renderNodeGroup(tree)}</Container>
}
