import superstyle from 'superstyle/react'
import hoc from './style-hoc'

const Heading = superstyle({
  fontSize: 24,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  margin: 0,
  '@media screen and (min-width: 64em)': {
    fontSize: 32
  },
})('h2')

export default hoc(Heading)
