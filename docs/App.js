import React from 'react'
import sx from 'superstyle'
import hello from 'hello-color'
import PropTypes from 'prop-types'
import colors from './colors'
import Header from './Header'
import CSS from './CSS'

const backgroundColor = colors[10][4]
const color = hello(backgroundColor).color

const base = sx({
  '--text': color,
  '--color-b': backgroundColor,
  color: 'var(--color-b)',
  // backgroundColor,
  transitionProperty: 'color, background-color',
  transitionDuration: '.4s',
  transitionTimingFunction: 'ease-out',

})

export default class App extends React.Component {
  state = {
    backgroundColor,
    count: 0
  }

  update = fn => this.setState(fn)

  static childContextTypes = {
    update: PropTypes.func
  }

  getChildContext () {
    return {
      update: this.update
    }
  }

  componentDidUpdate (last, state) {
    if (state !== this.state) {
      const { backgroundColor } = this.state
      const color = hello(backgroundColor).color

      base.set({
        '--text': color,
        '--color-b': backgroundColor,
        // color,
        // backgroundColor
      })
    }
  }

  render () {
    const { count } = this.state
    const color = colors[Math.abs(count) % colors.length]
    const props = {
      ...this.props,
      ...this.state,
      color,
    }

    console.log(base.refs)
    base.set({
      // testing
      ':focus': {
        backgroundColor: 'tomato',
        ':hover': {
          backgroundColor: 'green',
        }
      }
    })

    return (
      <div className={base.className}>
        <Header {...props} />
        <CSS />
      </div>
    )
  }
}
