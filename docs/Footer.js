import React from 'react'
import Container from './Container'
import Link from './Link'

const Footer = props => (
  <footer>
    <Container py4>
      <Link
        mr2
        href='https://github.com/jxnblk/superstyle'>
        GitHub
      </Link>
      <Link href='http://jxnblk.com'>
        Made by Jxnblk
      </Link>
    </Container>
  </footer>
)

export default Footer
