import superstyle from 'superstyle/react'
import hoc from './style-hoc'

const Flex = superstyle({
  display: 'flex'
})('div')

export default hoc(Flex)
