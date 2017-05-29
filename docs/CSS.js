import React from 'react'
import sx, { sheet } from 'superstyle'
import superstyle from 'superstyle/react'
import { css as beautify } from 'js-beautify'
import Container from './Container'
import Subhead from './Subhead'
import Code from './Code'
import Pre from './Pre'

const CSS = props => {
  const css = sheet.css

  return (
    <Container py4>
      <Subhead>CSS for this page</Subhead>
      <Code>{css.length} bytes</Code>
      <Pre
        css={{
          maxHeight: 512,
          overflow: 'auto',
        }}
        children={beautify(css)}
      />
    </Container>
  )
}

export default CSS
