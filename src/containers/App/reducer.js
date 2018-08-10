const initialState = {
  isAuthenticated: false,
  isTokenChecked: false,
  userId: null,
  username: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_TOKEN_CHECK': {
      return Object.assign({}, state, {
        isAuthenticated: action.params.isAuthenticated,
        isTokenChecked: action.params.isTokenChecked,
        userId: action.params.userId,
        username: action.params.username,
      })
    }
    case 'SUCCESS_LOGOUT': {
      return Object.assign({}, state, {
        isAuthenticated: false,
        isTokenChecked: true,
        userId: null,
        username: '',
      })
    }
    default:
      return state
  }
}
