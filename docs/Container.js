import superstyle from 'superstyle/react'
import hoc from './style-hoc'

const Container = superstyle({
  paddingLeft: 32,
  paddingRight: 32,
  width: '100%',
  maxWidth: 1280,
  margin: 'auto'
})('div')

export default hoc(Container)
