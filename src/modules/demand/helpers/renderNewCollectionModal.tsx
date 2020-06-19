import React, { useState } from "react"
import { useModalContext } from "../../../common/modal/hooks/useModalContext"
import { PrimaryModal } from "../../../common/modal/components/PrimaryModal"
import { RegionInput } from "../../game/components/RegionInput"
import styled from "../../theming/custom"
import { PrimaryButton } from "../../../common/button/components/PrimaryButton"
import { SecondaryButton } from "../../../common/button/components/SecondaryButton"
import { RegionName } from "../../game/types/RegionName"
import { FormField } from "../../../common/form/components/FormField"
import { TextInput } from "../../../common/input/components/TextInput"

import * as regions from "../../game/regions"

const Disclaimer = styled.span`
  margin-bottom: 16px;
  display: inline-block;
`

const Container = styled(PrimaryModal.Container)`
  max-width: 300px;
`

const Field = styled(FormField)`
  margin-bottom: 32px;
`

export type CollectionData = {
  region: RegionName
  name: string
}

export const renderNewCollectionModal = (onChange: (data: CollectionData) => void) => {
  function NewCollectionModal() {
    const modal = useModalContext()
    const [region, setRegion] = useState("oldWorld" as RegionName)
    const [name, setName] = useState("")

    const defaultName = regions[region].name

    return (
      <Container>
        <PrimaryModal.Header title="Create new collection" />
        <PrimaryModal.Body>
          <Disclaimer>Create a new collection to organize your islands.</Disclaimer>
          <Field label="Name">
            <TextInput placeholder={defaultName} value={name} onInput={setName} />
          </Field>
          <FormField label="Default region">
            <RegionInput value={region} onChange={setRegion} />
          </FormField>
        </PrimaryModal.Body>
        <PrimaryModal.Footer>
          <PrimaryModal.Actions>
            <PrimaryButton
              onClick={() => {
                onChange({
                  name: name || defaultName,
                  region,
                })

                modal.close()
              }}
              label="Create"
            />
            <SecondaryButton
              onClick={() => {
                modal.close()
              }}
              label="Cancel"
            />
          </PrimaryModal.Actions>
        </PrimaryModal.Footer>
      </Container>
    )
  }

  return () => <NewCollectionModal />
}
