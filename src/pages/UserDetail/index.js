import React, { Component } from 'react'
import { connect } from 'react-redux'

// logic
import {
  initializedUserDetail,
} from './logic'


class UserDetail extends Component {
  componentWillMount() {
    const username = this.props.match.params.username

    this.props.initializedUserDetail(username)
  }

  render() {
    if (this.props.isLoading) {
      const { user, flips, good_flips } = this.props.userDetail

      return (
        <div className="UserDetail">
          --- UserDetail ---
          <br />

          user: [{user.user_id}] {user.username} {user.thumbnail}<br />
          desc: {user.description}<br />
          <br />

          flips:
          {flips.map(f => (
            <div key={f.flip.flip_id}>
              [{f.flip.flip_id}] {f.flip.title} ({f.flip.create_at}) by {f.user.username}
            </div>
          ))}
          <br />

          goodFlips:
          {good_flips.map(f => (
            <div key={f.flip.flip_id}>
              [{f.flip.flip_id}] {f.flip.title} ({f.flip.create_at}) by {f.user.username}
            </div>
          ))}
          <br />

        </div>
      )
    } else {
      return (
        <div className="UserDetail" />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.App.isAuthenticated,
  isLoading: state.UserDetail.isLoading,
  userDetail: state.UserDetail.userDetail,
})

const mapDispatchToProps = (dispatch) => ({
  initializedUserDetail: (username) => dispatch(initializedUserDetail(username)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail)
