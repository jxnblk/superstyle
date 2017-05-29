// React HOC for superstyle
const React = require('react')
const classnames = require('classnames')
const sx = require('./index')
const h = React.createElement

// Browser only component
module.exports = style => Component => {
  const rule = sx(style)

  class SuperComponent extends React.Component {
    constructor (props) {
      super(props)

      if (props.css) {
        rule.set(css)
      }
    }

    componentWillReceiveProps (next) {
      if (next.css !== this.props.css) {
        rule.set(next.css)
      }
    }

    render () {
      const className = classnames(this.props.className, rule.className)

      return h(Component, {
        ...this.props,
        className
      })
    }
  }

  return SuperComponent
}
