import palx from 'palx'

const palette = palx('#07c')

const colors = Object.keys(palette)
  .filter(key => Array.isArray(palette[key]))
  .map(key => palette[key])

export const darken = n => `rgba(0,0,0,${n})`

export default colors
