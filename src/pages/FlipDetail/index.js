import React, { Component } from 'react'
import { connect } from 'react-redux'

// components
import FlipDetailSideBar from '../../components/FlipDetailSideBar'
import FlipHeader from '../../components/FlipHeader'
import FlipMainView from '../../components/FlipMainView'
import FlipTagList from '../../components/FlipTagList'


// logic
import {
  deleteFlip,
  initializedFlipDetail,
  postFlipBookmark,
  postFlipGood,
  revertFlipBookmark,
  revertFlipGood,
} from './logic'

// styles
import { StyledFlipDetail } from './styles';


class FlipDetail extends Component {
  componentWillMount() {
    const flip_id = this.props.match.params.flip_id

    this.props.initializedFlipDetail(flip_id)
  }

  render() {
    if (this.props.isLoading) {
      const { author, flip, items, tags } = this.props.flipDetail
      const { isBookmark, isGood } = this.props

      return (
        <div className="FlipDetail">
          <FlipDetailSideBar
            flip={flip}
            isBookmark={isBookmark}
            isGood={isGood}
            postFlipBookmark={() => this.props.postFlipBookmark(flip.flip_id)}
            postFlipGood={() => this.props.postFlipGood(flip.flip_id)}
            revertFlipBookmark={() => this.props.revertFlipBookmark(flip.flip_id)}
            revertFlipGood={() => this.props.revertFlipGood(flip.flip_id)}
          />

          <StyledFlipDetail>

            {/* 作成者ユーザ */}
            <FlipHeader
              author={author}
              flip={flip}
            />
            <FlipTagList
              tags={tags}
            />

            {/* メインビュー */}
            <FlipMainView
              flip={flip}
              items={items}
            />

          </StyledFlipDetail>
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
  userId: state.App.userId,
  username: state.App.username,
  bookmarkCnt: state.FlipDetail.bookmarkCnt,
  goodCnt: state.FlipDetail.goodCnt,
  flipDetail: state.FlipDetail.flipDetail,
  isAuthor: state.FlipDetail.isAuthor,
  isBookmark: state.FlipDetail.isBookmark,
  isGood: state.FlipDetail.isGood,
  isLoading: state.FlipDetail.isLoading,
})

const mapDispatchToProps = (dispatch, getState) => ({
  deleteFlip: (flip_id, username) => dispatch(deleteFlip(getState, flip_id, username)),
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
