// React HOC for superstyle
const React = require('react')
const classnames = require('classnames')
const sx = require('./index')
const h = React.createElement

// Browser only component
module.exports = style => Component => {
  const base = sx(style)

  class SuperComponent extends React.Component {
    constructor (props) {
      super(props)

      this.rule = sx(props.css)
    }

    componentWillReceiveProps (next) {
      if (next.css !== this.props.css) {
        this.rule.set(next.css)
      }
    }

    render () {
      const { css, ...props } = this.props
      const className = classnames(
        props.className,
        base.className,
        this.rule.className
      )

      return h(Component, {
        ...props,
        className
      })
    }
  }

  return SuperComponent
}
