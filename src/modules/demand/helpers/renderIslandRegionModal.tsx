import { Island } from "../classes/Island"
import React, { useState } from "react"
import { useModalContext } from "../../../common/modal/hooks/useModalContext"
import { PrimaryModal } from "../../../common/modal/components/PrimaryModal"
import { RegionInput } from "../../game/components/RegionInput"
import styled from "../../theming/custom"
import { PrimaryButton } from "../../../common/button/components/PrimaryButton"
import { SecondaryButton } from "../../../common/button/components/SecondaryButton"
import { RegionName } from "../../game/types/RegionName"

const Disclaimer = styled.span`
  margin-bottom: 16px;
  display: inline-block;
`

const Container = styled(PrimaryModal.Container)`
  max-width: 300px;
`

export const renderIslandRegionModal = (
  island: Island,
  onChange: (newRegion: RegionName) => void,
) => {
  function IslandRegionModal() {
    const modal = useModalContext()
    const [region, setRegion] = useState(island.region)

    return (
      <Container>
        <PrimaryModal.Header title="Change island region" />
        <PrimaryModal.Body>
          <Disclaimer>
            Changing the island region will reset population on that island to 0.
          </Disclaimer>
          <RegionInput value={region} onChange={setRegion} />
        </PrimaryModal.Body>
        <PrimaryModal.Footer>
          <PrimaryModal.Actions>
            <PrimaryButton
              onClick={() => {
                onChange(region)
                modal.close()
              }}
              label="Save"
            />
            <SecondaryButton
              onClick={() => {
                modal.close()
              }}
              label="Close"
            />
          </PrimaryModal.Actions>
        </PrimaryModal.Footer>
      </Container>
    )
  }

  return () => <IslandRegionModal />
}
