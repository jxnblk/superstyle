import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import superstyle from 'superstyle/react'
import Container from './Container'
import Subhead from './Subhead'
import Lead from './Lead'
import Flex from './Flex'
import Grid from './Grid'

const Row = props => (
  <Flex
    {...props}
    css={{
      flexWrap: 'wrap'
    }}
  />
)

const ReactDemo = props => (
  <section onClick={e => props.stop()}>
    <Container py4>
      <Subhead>React</Subhead>
      <Lead my3>Superstyle also includes a React higher-order component for applying encapsulated, dynamic styles to components.</Lead>
      <LiveProvider
        noInline
        scope={{
          superstyle
        }}
        code={code}>
        <Row>
          <Grid>
            <LiveEditor
              style={{
                minHeight: 384
              }}
            />
            <LiveError />
          </Grid>
          <Grid css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: 384,
            overflow: 'auto'
          }}>
            <LivePreview />
          </Grid>
        </Row>
      </LiveProvider>
    </Container>
  </section>
)

const code = `// create a component with static, base styles
const Box = superstyle({
  fontSize: 32,
  fontWeight: 600,
  padding: 32,
  backgroundColor: 'var(--alpha)'
})('div')

// update styles using the \`css\` prop
render(
  <div>
    <Box
      css={{
        color: 'white'
      }}>
      Hello
    </Box>
  </div>
)
`

export default ReactDemo
