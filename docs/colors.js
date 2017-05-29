import palx from 'palx'
import hello from 'hello-color'

const palette = palx('#07c')

const colors = Object.keys(palette)
  .filter(key => Array.isArray(palette[key]))
  .map(key => palette[key][4])

export default colors
