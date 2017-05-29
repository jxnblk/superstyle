import React from 'react'
import sx, { sheet } from 'superstyle'
import superstyle from 'superstyle/react'

const Pre = superstyle({
  whiteSpace: 'pre-wrap'
})('pre')

const CSS = props => (
  <div>
    <Pre>{sheet.css}</Pre>
  </div>
)

export default CSS
