import React, { Component } from 'react'
import { connect } from 'react-redux'


class UserSettings extends Component {
  render() {
    return (
      <div className="UserSettings">
        UserSettings (private)
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
)(UserSettings)
