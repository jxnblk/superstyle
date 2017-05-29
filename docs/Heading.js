import superstyle from 'superstyle/react'
import hoc from './style-hoc'
import { darken } from './colors'

const Heading = superstyle({
  fontSize: 24,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  margin: 0,

  textShadow: `0 0 32px ${darken(1/4)}`,

  '@media screen and (min-width: 32em)': {
    fontSize: 48,
  },
  '@media screen and (min-width: 48em)': {
    fontSize: 64
  },
  '@media screen and (min-width: 64em)': {
    fontSize: 72
  }
})('h1')

export default hoc(Heading)
