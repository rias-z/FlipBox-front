const initialState = {
  flipDetail: null,
  isAuthor: false,
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_FLIP_EDIT': {
      return Object.assign({}, state, {
        flipDetail: action.params.flipDetail,
        isAuthor: action.params.flipDetail.is_author,
        isLoading: true,
      })
    }
    default:
      return state
  }
}
