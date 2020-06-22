import React from "react"
import { PageTitle } from "../../core/components/PageTitle"
import { InlineLink } from "../../core/components/InlineLink"
import styled from "styled-components"
import { ExternalLink } from "../../core/components/ExternalLink"
import { DonateButton } from "./DonateButton"

const Heading = styled.h2`
  margin-top: 48px;
  font-size: 1.5em;
  font-weight: 700;
`

export function HomePage() {
  return (
    <>
      <PageTitle icon="home" title="Welcome" />
      <p>
        This is an open source calculator made for the game Anno 1800. See the sections
        below to understand how you can use it.
      </p>
      <Heading>Resident Demands</Heading>
      <p>
        On the <InlineLink to="/demands">resident demands tab</InlineLink> you can
        calculate the resources needed for your population. You can create collections to
        organize your islands and transfer them for later with the export and import
        feature.
      </p>
      <p>
        If you need your island to be of a different world type, click "Change Region"
        when the current island tab is selected. Note that new islands in a collection
        will default to the region type of the collection, this can be changed when
        creating the collection.
      </p>
      <p>Your current setup saves automatically and will persist through refreshes.</p>
      <Heading>Production Chains</Heading>
      <p>
        On the <InlineLink to="/chains">production chains tab</InlineLink> you can see the
        most efficient setups for end products. Simply click on a resident on the
        accordion menu on the left to select a building.
      </p>
      <Heading>GitHub</Heading>
      <p>
        The project is fully open source and available on{" "}
        <ExternalLink to="https://github.com/Enitoni/anno-1800-calculator">
          GitHub.
        </ExternalLink>
      </p>
      <p>
        If you experience bugs with the app or want to suggest a new feature, please send
        an email to Caledorn via email, the email is "caledorn" at gmail. Making an issue
        on the repository is also okay, but your request will get higher priority via
        email.
      </p>
      <Heading>Support & Links</Heading>
      <p>
        Like this project? Consider donating, or don't! Completely up to you. Anything is
        appreciated either way.
      </p>
      <DonateButton />
      <p>Also check out Enitoni and Caledorn!</p>
      <ul>
        <li>
          <ExternalLink to="https://enitoni.dev">Enitoni's website</ExternalLink>
        </li>
        <li>
          <ExternalLink to="https://www.youtube.com/channel/UCXG0Km-iVXUGn_hyLKdyiFQ">
            Caledorn's YouTube Channel
          </ExternalLink>
        </li>
      </ul>
    </>
  )
}
