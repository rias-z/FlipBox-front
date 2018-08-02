const initialState = {
  isTokenChecked: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_TOKEN_CHECK': {
      return Object.assign({}, state, {
        isTokenChecked: true,
      })
    }
    case 'FAILED_TOKEN_CHECK': {
      return Object.assign({}, state, {
        isTokenChecked: false,
      })
    }
    default:
      return state
  }
}
