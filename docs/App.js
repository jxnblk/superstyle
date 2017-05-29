import React from 'react'
import sx, { sheet } from 'superstyle'
import hello from 'hello-color'
import colors from './colors'
import { dec, inc } from './updaters'

const backgroundColor = colors[0]
const color = hello(backgroundColor).color

const base = sx({
  padding: 32,
  color,
  backgroundColor,
  transitionProperty: 'color, background-color',
  transitionDuration: '.4s',
  transitionTimingFunction: 'ease-out'
})

const pre = sx({
  whiteSpace: 'pre-wrap'
})

export default class App extends React.Component {
  state = {
    backgroundColor,
    count: 0
  }

  update = fn => this.setState(fn)

  componentDidUpdate (last, state) {
    if (state !== this.state) {
      const { backgroundColor } = this.state
      const color = hello(backgroundColor).color

      base.set({
        color,
        backgroundColor
      })
    }
  }

  render () {
    const css = sx.sheet.css

    return (
      <div className={base.className}>
        <h1>Superstyle</h1>
        <p>CSSOM CSS-in-JS library</p>
        <button
          onClick={e => this.update(dec)}
          children='-'
        />
        <button
          onClick={e => this.update(inc)}
          children='+'
        />
        <h2>CSS</h2>
        <pre className={pre.className}>{css}</pre>
      </div>
    )
  }
}
