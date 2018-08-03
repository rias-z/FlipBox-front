const initialState = {
  flipDetail: null,
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_FLIP_DETAIL': {
      return Object.assign({}, state, {
        flipDetail: action.params.flipDetail,
        isLoading: true,
      })
    }
    case 'FAILED_INITIALIZED_FLIP_DETAIL': {
      return initialState
    }
    default:
      return state
  }
}
