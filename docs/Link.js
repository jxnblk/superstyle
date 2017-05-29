import superstyle from 'superstyle/react'
import hoc from './style-hoc'

const Link = superstyle({
  fontWeight: 600,
  textDecoration: 'none',
  color: 'inherit',

  ':hover': {
    textDecoration: 'underline'
  }
})('a')

export default hoc(Link)
