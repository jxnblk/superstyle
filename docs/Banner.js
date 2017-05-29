import superstyle from 'superstyle/react'

const Banner = superstyle({
  minHeight: '70vh',
  color: 'white',
  backgroundColor: 'var(--beta)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  // backgroundPosition: '20vw center',
  backgroundBlendMode: 'screen',
  transitionProperty: 'background-color, background-image',
  transitionDuration: '.5s',
  transitionTimingFunction: 'ease-out',
})('header')

export default Banner
