import superstyle from 'superstyle/react'
import hoc from './style-hoc'
import { darken } from './colors'

const Button = superstyle({
  display: 'inline-flex',
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 'bold',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  margin: 0,
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 24,
  paddingRight: 24,
  color: 'white',
  backgroundColor: 'var(--beta)',
  border: 0,
  borderRadius: 2,
  backgroundBlendMode: 'overlay',
  opacity: 7/8,
  boxShadow: `0 0 64px ${darken(1/4)}`,

  ':hover': {
    opacity: 1,
    boxShadow: `0 0 64px ${darken(1/2)}` // , inset 0 0 0 999px ${darken(1/4)}`
  },

  ':focus': {
    outline: 'none',
    boxShadow: `inset 0 0 2px 0px var(--alpha), 0 0 0 2px var(--beta)`,
    opacity: 1,
  },

  ':active': {
    boxShadow: `inset 0 0 0 999px ${darken(1/2)}`
  }
})('a')

export default hoc(Button)
