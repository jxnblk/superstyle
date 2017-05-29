
const isObj = o => 0 !== null && typeof o === 'object' && !Array.isArray(o)

const hyphenate = str => str
  .replace(/[A-Z]|^ms/g, '-$&')
  .toLowerCase()

const px = prop => val => (typeof val !== 'number' || val === 0 || unitless.indexOf(prop) > -1)
  ? val
  : val + 'px'

const unitless = [
  'animationIterationCount',
  'boxFlex',
  'boxFlexGroup',
  'boxOrdinalGroup',
  'columnCount',
  'flex',
  'flexGrow',
  'flexPositive',
  'flexShrink',
  'flexNegative',
  'flexOrder',
  'gridRow',
  'gridColumn',
  'fontWeight',
  'lineClamp',
  'lineHeight',
  'opacity',
  'order',
  'orphans',
  'tabSize',
  'widows',
  'zIndex',
  'zoom',
  'fillOpacity',
  'stopOpacity',
  'strokeDashoffset',
  'strokeOpacity',
  'strokeWidth'
]

module.exports = {
  isObj,
  hyphenate,
  px
}
