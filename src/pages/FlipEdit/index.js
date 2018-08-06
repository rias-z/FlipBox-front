import React, { Component } from 'react'
import { connect } from 'react-redux'

// logic
import {
  initializedFlipEdit,
} from './logic'


class FlipEdit extends Component {
  componentWillMount() {
    const flip_id = this.props.match.params.flip_id

    this.props.initializedFlipEdit(flip_id)
  }

  render() {
    if (this.props.isLoading) {
      // const flip = this.props.flipDetail.flip
      // const author = this.props.flipDetail.author
      // const items = this.props.flipDetail.items

      return (
        <div className="FlipEdit">
          --- FlipEdit ---
          <br />

          [FlipEditView]<br />
          title, tagの編集<br />
          itemsの編集/追加/削除<br />

          <br />

          {(() => {
            if (this.props.isAuthor) {
              return (
                <div>
                  更新
                </div>
              )
            } else {
              return (
                <div>
                  編集リクエスト送信
                </div>
              )
            }
          })()}
        </div>
      )
    } else {
      return (
        <div className="FlipEdit" />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  flipDetail: state.FlipEdit.flipDetail,
  isAuthor: state.FlipEdit.isAuthor,
  isLoading: state.FlipEdit.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  initializedFlipEdit: (flip_id) => dispatch(initializedFlipEdit(flip_id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlipEdit)
