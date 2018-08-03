const initialState = {
  flips: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_INITIALIZED_TOP': {
      return Object.assign({}, state, {
        flips: action.params.flips,
        isLoading: true,
      })
    }
    case 'FAILED_INITIALIZED_TOP': {
      return initialState
    }
    default:
      return state
  }
}
