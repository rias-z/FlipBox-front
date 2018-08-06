import React, { Component } from 'react'
import { connect } from 'react-redux'

// api
import {
  initializedFlipDetail,
  postFlipBookmark,
  postFlipGood,
  revertFlipBookmark,
  revertFlipGood,
} from './logic'


class FlipDetail extends Component {
  componentWillMount() {
    const flip_id = this.props.match.params.flip_id

    this.props.initializedFlipDetail(flip_id)
  }

  render() {
    if (this.props.isLoading) {
      const flip = this.props.flipDetail.flip
      const author = this.props.flipDetail.author
      const items = this.props.flipDetail.items

      return (
        <div className="FlipDetail">
          --- FlipDetail (public) ---
          <br />
          Author:<br/>
          [{author.user_id}] {author.username} {author.thumbnail}<br />
          <br />

          Flip:<br />
          [{flip.flip_id}] {flip.title}<br />
          bmk: {flip.bookmark_cnt} gb: {flip.good_cnt} create_at: ({flip.create_at})<br />
          <br />

          Items:<br />
          {items.map(item => (
            <div key={item.item_id}>
              [{item.item_id}] {item.name}<br />
              url: {item.url}<br />
              description: {item.description}<br />
              <br />
            </div>
          ))}

          {(() => {
            if (this.props.isAuthenticated) {
              const renderFlipGoodButton = !this.props.isGood ? (
                <div>
                  いいね：{this.props.goodCnt}_
                  <input type='button' value='いいねする' onClick={() => {
                    this.props.postFlipGood(flip.flip_id)
                  }} />
                </div>
              ) : (
                <div>
                  いいね：{this.props.goodCnt}_
                  <input type='button' value='いいねを取り消す' onClick={() => {
                    this.props.revertFlipGood(flip.flip_id)
                  }} />
                </div>
              )

              const renderFlipBookmarkButton = !this.props.isBookmark ? (
                <div>
                  ブックマーク：{this.props.bookmarkCnt}_
                  <input type='button' value='ブックマークする' onClick={() => {
                    this.props.postFlipBookmark(flip.flip_id)
                  }} />
                </div>
              ) : (
                <div>
                  ブックマーク：{this.props.bookmarkCnt}_
                  <input type='button' value='ブックマークを取り消す' onClick={() => {
                    this.props.revertFlipBookmark(flip.flip_id)
                  }} />
                </div>
              )

              return (
                <div>
                  {renderFlipGoodButton}
                  {renderFlipBookmarkButton}
                </div>
              )
            } else {
              return (
                <div>
                  いいね： {this.props.goodCnt}<br />
                  ブックマーク： {this.props.bookmarkCnt}<br />
                </div>
              )
            }
          })()}
        </div>
      )
    } else {
      return (
        <div className="FlipDetail" />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.App.isAuthenticated,
  bookmarkCnt: state.FlipDetail.bookmarkCnt,
  goodCnt: state.FlipDetail.goodCnt,
  flipDetail: state.FlipDetail.flipDetail,
  isBookmark: state.FlipDetail.isBookmark,
  isGood: state.FlipDetail.isGood,
  isLoading: state.FlipDetail.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  postFlipBookmark: (flip_id) => dispatch(postFlipBookmark(flip_id)),
  postFlipGood: (flip_id) => dispatch(postFlipGood(flip_id)),
  revertFlipBookmark: (flip_id) => dispatch(revertFlipBookmark(flip_id)),
  revertFlipGood: (flip_id) => dispatch(revertFlipGood(flip_id)),
  initializedFlipDetail: (flip_id) => dispatch(initializedFlipDetail(flip_id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlipDetail)
