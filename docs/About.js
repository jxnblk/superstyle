import React from 'react'
import Container from './Container'
import Subhead from './Subhead'
import Lead from './Lead'

const About = props => (
  <section>
    <Container py4>
      <Subhead my3>About</Subhead>
      <Lead children={copy} />
    </Container>
  </section>
)

const copy = `Superstyle is an experimental CSS-in-JS utility
library that uses CSSOM to patch updates to styles after injection.
Using plain JavaScript objects to author styles, superstyle
helps promote style encapsulation while making use of native
browser CSS APIs.
`

export default About
