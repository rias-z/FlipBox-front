export const successInitializedTop = (params) => {
  return {
    type: 'SUCCESS_INITIALIZED_TOP',
    params: params
  }
}

export const failedInitializedTop = () => {
  return {
    type: 'FAILED_INITIALIZED_TOP',
  }
}
