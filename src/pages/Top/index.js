import React, { Component } from 'react'
import { connect } from 'react-redux'

// api
import { initializedTop } from './logic'

// containers
import MainView from '../../components/MainView'


class Top extends Component {
  componentWillMount() {
    this.props.initializedTop()
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="Top">
          Top (public)

          <MainView
            flips={this.props.flips}
          />
        </div>
      )
    } else {
      return (
        <div className="Top" />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  flips: state.Top.flips,
  isLoading: state.Top.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  initializedTop: () => dispatch(initializedTop()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)
