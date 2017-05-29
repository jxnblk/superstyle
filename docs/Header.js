import React from 'react'
import superstyle from 'superstyle/react'
import Flex from './Flex'
import Container from './Container'
import Box from './Box'
import Banner from './Banner'
import Heading from './Heading'
import Lead from './Lead'
import Button from './Button'
import Code from './Code'
import colors, { darken } from './colors'
import connect from './connect'
import { dec, inc } from './updaters'

const img = 'https://cloud.githubusercontent.com/assets/3451712/16896009/c90f18f0-4b54-11e6-81e3-dbde27b3fcb0.png'

const gradient = (a, from, to) => `
url(${img}),
linear-gradient(${a}deg, ${from} 0%, ${to} 100%)
`
const angle = n => (n % 12) * 30

const Header = (props, context) => (
  <Banner css={{ backgroundImage: gradient(-60, 'transparent', 'var(--alpha)') }}
    onClick={e => {
      props.stop()
      context.update(inc)
    }}>
    <Container>
      <Flex css={{ minHeight: '70vh', alignItems: 'center' }}>
        <Box py4 css={{ mixBlendMode: 'multiply', color: 'var(--beta)'
          }}>
          <Heading>Superstyle</Heading>
          <Lead
            mb3
            css={{ textTransform: 'uppercase', letterSpacing: '0.3em' }}>
            CSSOM-JS utility library
          </Lead>
          <Button
            my3
            mr2
            href='https://github.com/jxnblk/superstyle'
            children='GitHub'
          />
          <Code>npm i superstyle</Code>
        </Box>
      </Flex>
    </Container>
    <Code>{props.count.toString(36)}</Code>
  </Banner>
)

export default connect(Header)
