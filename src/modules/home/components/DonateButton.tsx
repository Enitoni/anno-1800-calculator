import React from "react"
import styled from "styled-components"

const Image = styled.input`
  max-width: 100px;
`

export function DonateButton() {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="EW8TJYUQLSU62" />
      <Image
        type="image"
        src="https://enitoni.github.io/anno-1800-calculator/img/donate.png"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        src="https://www.paypal.com/en_NO/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  )
}
