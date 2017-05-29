import React from 'react'
import Container from './Container'
import Subhead from './Subhead'
import Pre from './Pre'

const Usage = props => (
  <section>
    <Container py4>
      <Subhead>Usage</Subhead>
      <Pre children={example} />
    </Container>
  </section>
)

const example = `import sx from 'superstyle'

// create a superstyle rule
const rule = sx({ color: 'magenta' })

// apply the className to an element
const h1 = document.getElementById('h1')
h1.className = rule.className

// update the styles in the CSS rule
rule.set({ color: 'cyan' })`

export default Usage
