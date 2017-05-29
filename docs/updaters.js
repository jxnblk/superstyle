import colors from './colors'

export const inc = state => ({
  count: state.count + 1,
  alpha: colors[(state.count + 1) % colors.length][4]
})

export const dec = state => ({
  count: state.count - 1,
  alpha: colors[(state.count + 1) % colors.length][4]
})
