import { TraversedBuilding } from "../../types/TraversedBuilding"
import styled from "../../../theming/custom"
import { useRef, useEffect, useState } from "react"
import React from "react"
import { TreeNode } from "./TreeNode"
import { Connector } from "./Connector"

export type NodeGroupProps = {
  onGetRootElement?: (element: HTMLElement | null) => void
  tree: TraversedBuilding
}

const Container = styled.div`
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

const Node = styled(TreeNode)`
  max-width: 80px;
  min-height: 125px;
  position: relative;
  z-index: 2;
`

const ChildConnector = styled(Connector)``

export function NodeGroup(props: NodeGroupProps) {
  const { tree, onGetRootElement } = props
  const { children, building } = tree

  const [childrenConnections, setChildrenConnections] = useState<HTMLElement[]>([])

  const nodeRef = useRef<HTMLElement | null>(null)
  const childrenRefs = useRef<HTMLElement[]>([])

  const handleGetElement = (element: HTMLElement | null) => {
    nodeRef.current = element
    onGetRootElement?.(element)
  }

  const handleGetChildElement = (element: HTMLElement | null, index: number) => {
    if (element) {
      childrenRefs.current[index] = element
    } else {
      childrenRefs.current = []
    }
  }

  useEffect(() => {
    const condition = !!(
      childrenRefs.current.length === children.length && nodeRef.current
    )

    if (condition) {
      setChildrenConnections(childrenRefs.current)
    }

    return () => {
      setChildrenConnections([])
    }
  }, [children.length, tree])

  return (
    <Container>
      <Node onGetElement={handleGetElement} count={4} building={building} />
      {children.length > 0 && (
        <Children>
          {children.map((c, i) => (
            <NodeGroup
              onGetRootElement={(e) => handleGetChildElement(e, i)}
              key={i}
              tree={c}
            />
          ))}
        </Children>
      )}
      {childrenConnections.length > 0 &&
        childrenConnections.map((e, i) => (
          <ChildConnector key={i} from={nodeRef.current!} to={e} />
        ))}
    </Container>
  )
}
