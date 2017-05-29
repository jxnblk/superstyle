import superstyle from 'superstyle/react'
import hoc from './style-hoc'

const Lead = superstyle({
  fontSize: 20,
  // textTransform: 'uppercase',
  // letterSpacing: '0.3em',
  fontWeight: 600,
  maxWidth: '40em',
  margin: 0
})('p')

export default hoc(Lead)
