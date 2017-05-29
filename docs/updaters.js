import colors from './colors'

export const inc = state => ({
  count: state.count + 1,
  backgroundColor: colors[(state.count + 1) % colors.length]
})

export const dec = state => ({
  count: state.count - 1,
  backgroundColor: colors[(state.count + 1) % colors.length]
})
