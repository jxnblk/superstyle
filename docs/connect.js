import React from 'react'
import PropTypes from 'prop-types'

const connect = Component => {
  class Connected extends React.Component {
    render () {
      return Component(this.props, this.context)
    }
  }

  Connected.contextTypes = {
    update: PropTypes.func
  }

  return Connected
}

export default connect
