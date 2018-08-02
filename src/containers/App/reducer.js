const initialState = {
  isAuthenticated: false,
  isTokenChecked: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_TOKEN_CHECK': {
      return Object.assign({}, state, {
        isAuthenticated: action.params.isAuthenticated,
        isTokenChecked: action.params.isTokenChecked,
      })
    }
    case 'SUCCESS_LOGOUT': {
      return Object.assign({}, state, {
        isAuthenticated: false,
        isTokenChecked: true,
      })
    }
    default:
      return state
  }
}
