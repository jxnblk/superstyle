import React from 'react'
import sx from 'superstyle'
import hello from 'hello-color'
import PropTypes from 'prop-types'
import colors from './colors'
import Header from './Header'
import About from './About'
import Usage from './Usage'
import ReactDemo from './ReactDemo'
import CSS from './CSS'
import Footer from './Footer'
import { inc } from './updaters'

const alpha = colors[2][4]
const beta = hello(alpha).color

const base = sx({
  '--alpha': alpha,
  '--beta': beta,
  // color: 'var(--beta)',
  transitionProperty: 'color',
  transitionDuration: '.4s',
  transitionTimingFunction: 'ease-out',
})

export default class App extends React.Component {
  state = {
    alpha,
    count: 0
  }

  update = fn => this.setState(fn)

  updateColors = () => {
    const { alpha } = this.state
    const beta = hello(alpha).color

    base.set({
      '--alpha': alpha,
      '--beta': beta,
    })
  }

  stop = () => {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  static childContextTypes = {
    update: PropTypes.func
  }

  getChildContext () {
    return {
      update: this.update
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.update(inc)
    }, 3000)
  }

  componentDidUpdate (last, state) {
    if (state.count !== this.state.count) {
      this.updateColors()
    }
  }

  render () {
    const { count } = this.state
    const color = colors[Math.abs(count) % colors.length]
    const props = {
      ...this.props,
      ...this.state,
      color,
      stop: this.stop
    }

    return (
      <div className={base.className}>
        <Header {...props} />
        <About {...props} />
        <Usage {...props} />
        <ReactDemo {...props} />
        <CSS {...props} />
        <Footer {...props} />
      </div>
    )
  }
}
