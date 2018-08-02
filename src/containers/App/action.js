export const successTokenCheck = (params) => {
  return {
    type: 'SUCCESS_TOKEN_CHECK',
    params: params
  }
}

export const successLogout = () => {
  return {
    type: 'SUCCESS_LOGOUT',
  }
}
