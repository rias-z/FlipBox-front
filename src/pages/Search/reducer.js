const initialState = {
  flips: [],
  isLoading: false,
  paging: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_GET_SEARCH_FLIP': {
      return Object.assign({}, state, {
        flips: action.params.flips,
        isLoading: true,
        paging: action.params.paging,
      })
    }
    default:
      return state
  }
}
