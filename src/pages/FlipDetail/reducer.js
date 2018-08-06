const initialState = {
  flipDetail: null,
  bookmarkCnt: 0,
  goodCnt: 0,
  isAuthor: false,
  isBookmark: false,
  isGood: false,
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_FLIP_DETAIL': {
      return Object.assign({}, state, {
        bookmarkCnt: action.params.flipDetail.flip.bookmark_cnt,
        goodCnt: action.params.flipDetail.flip.good_cnt,
        flipDetail: action.params.flipDetail,
        isAuthor: action.params.flipDetail.is_author,
        isGood: action.params.flipDetail.is_good,
        isBookmark: action.params.flipDetail.is_bookmark,
        isLoading: true,
      })
    }
    case 'FAILED_INITIALIZED_FLIP_DETAIL': {
      return initialState
    }
    case 'SUCCESS_POST_FLIP_BOOKMARK': {
      return Object.assign({}, state, {
        bookmarkCnt: state.bookmarkCnt + 1,
        isBookmark: true,
      })
    }
    case 'SUCCESS_POST_FLIP_GOOD': {
      return Object.assign({}, state, {
        goodCnt: state.goodCnt + 1,
        isGood: true,
      })
    }
    case 'SUCCESS_REVERT_FLIP_BOOKMARK': {
      return Object.assign({}, state, {
        bookmarkCnt: state.bookmarkCnt - 1,
        isBookmark: false,
      })
    }
    case 'SUCCESS_REVERT_FLIP_GOOD': {
      return Object.assign({}, state, {
        goodCnt: state.goodCnt - 1,
        isGood: false,
      })
    }
    default:
      return state
  }
}
