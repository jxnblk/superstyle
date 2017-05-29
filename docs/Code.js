import superstyle from 'superstyle/react'
import hoc from './style-hoc'
import { darken } from './colors'

const Code = superstyle({
  fontFamily: 'SFMono, Menlo, monospace',
  fontSize: 14,
  fontWeight: 600,
  padding: 8,
  borderRadius: 4,
})('code')

export default hoc(Code)
