import superstyle from 'superstyle/react'
import hoc from './style-hoc'

const Grid = superstyle({
  width: '100%',
  '@media screen and (min-width:40em)': {
    width: '50%'
  }
})('div')

export default hoc(Grid)
