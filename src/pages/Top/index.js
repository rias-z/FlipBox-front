import React, { Component } from 'react'
import { connect } from 'react-redux'


class Top extends Component {
  render() {
    return (
      <div className="Top">
        Top (public)
      </div>
    )
  }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)
