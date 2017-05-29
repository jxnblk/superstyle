import superstyle from 'superstyle/react'
import { sheet } from 'superstyle'

sheet.insert([
  `@keyframes spin {
    from { transform: rotate(0) }
    to { transform: rotate(360deg) }
  }`
])

const Spin = superstyle({
  width: 32,
  height: 32,
  fontSize: 32,
  lineHeight: 1,
  transformOrigin: '50% 50%',
  animationName: 'spin',
  animationTimingFunction: 'linear',
  animationDuration: '2s',
  animationIterationCount: 'infinite'
})('div')

export default Spin
