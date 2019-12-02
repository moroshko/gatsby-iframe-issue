import React from "react"
import { render } from "react-dom"
import Frame from "./components/Frame"

if (document) {
  const div = document.createElement("div")
  document.body.appendChild(div)

  render(<Frame />, div)
}
