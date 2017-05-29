import superstyle from 'superstyle/react'

const darken = n => `rgba(0,0,0,${n})`
const Button = superstyle({
  display: 'inline-flex',
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  margin: 0,
  padding: 16,
  color: 'white',
  // backgroundColor: darken(3/8),
  backgroundColor: 'var(--color-b)',
  border: 0,
  borderRadius: 4,
  backgroundBlendMode: 'multiply',
  ':hover': {
    // backgroundColor: darken(5/8)
  }
})('button')

export default Button
