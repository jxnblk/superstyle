import superstyle from 'superstyle/react'
import hoc from './style-hoc'
import { darken } from './colors'

const Pre = superstyle({
  fontFamily: 'SFMono, Menlo, monospace',
  fontSize: 12,
  padding: 16,
  borderRadius: 4,
  whiteSpace: 'pre-wrap',
  backgroundColor: darken(1/32)
})('pre')

export default hoc(Pre)
