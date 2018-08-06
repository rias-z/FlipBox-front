const initialState = {
  isLoading: false,
  userDetail: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_USER_DETAIL': {
      return Object.assign({}, state, {
        isLoading: true,
        userDetail: action.params.userDetail,
      })
    }
    default:
      return state
  }
}
