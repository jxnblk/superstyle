import React from 'react'
import superstyle from 'superstyle/react'
import Spin from './Spin'
import Flex from './Flex'
import Box from './Box'
import Button from './Button'
import colors from './colors'
import connect from './connect'
import { dec, inc } from './updaters'

const Banner = superstyle({
  padding: 32,
  minHeight: '80vh',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundBlendMode: 'overlay',
  // backgroundBlendMode: 'screen',
  '@media screen and (min-width: 32em)': {
    padding: 48,
  }
})('header')

const Heading = superstyle({
  fontSize: 24,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  margin: 0,
  '@media screen and (min-width: 32em)': {
    fontSize: 48,
  },
  '@media screen and (min-width: 48em)': {
    fontSize: 64
  },
  '@media screen and (min-width: 64em)': {
    fontSize: 72
  }
})('h1')

const Lead = superstyle({
  fontSize: 20,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  fontWeight: 600,
  margin: 0
})('p')

// const img = 'https://images.unsplash.com/photo-1471287948804-64345d89ec14?dpr=2&auto=format&fit=crop&w=1080&h=720&q=10&cs=tinysrgb&crop=&bg='
// const img = 'https://images.unsplash.com/photo-1459909633680-206dc5c67abb?dpr=2&auto=format&fit=crop&w=1080&h=720&q=20&cs=tinysrgb&crop=&bg='
// const img = 'https://images.unsplash.com/photo-1447433819943-74a20887a81e?dpr=2&auto=compress,format&fit=crop&w=568&h=367&q=20&cs=tinysrgb&crop=&bg='
// particle colliders
// const img = 'https://s-media-cache-ak0.pinimg.com/originals/df/69/96/df6996d8fd30a223d13870d5f4c4d474.png' // shutterstock
const img = 'http://img-1.newatlas.com/standard-model-particle-physics-unexpected-particle-2.jpg?auto=format%2Ccompress&fit=max&h=670&q=60&w=1000&s=a2327de6b9cbdbdf1593c5335cb8064e'

const gradient = (a, from, to) => `
url(${img}),
linear-gradient(${a}deg, ${from} 0%, ${to} 100%)
`
const angle = n => (n % 12) * 30

const Header = (props, context) => (
  <Banner css={{
    // backgroundImage: gradient(15 + (30 * (props.count % 12)), 'transparent', props.color[5])
    backgroundImage: gradient(angle(props.count), 'transparent', 'var(--text)')
  }}>
    <Flex css={{ height: '80vh', alignItems: 'center' }}>
      <Box css={{ width: '100%', margin: 'auto', maxWidth: 1024 }}>
        {/* <Spin>{'🎱'}</Spin> */}
        <Heading>Superstyle</Heading>
        <Lead>CSSOM CSS-in-JS library</Lead>
        <Button
          href='https://github.com/jxnblk/superstyle'
          children='GitHub'
        />
        {' '}
        <Button
          onClick={e => context.update(inc)}
          children='Boop'
        />
      </Box>
    </Flex>
  </Banner>
)

export default connect(Header)
