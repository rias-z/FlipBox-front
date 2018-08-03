export const successInitializedFlipDetail = (params) => {
  return {
    type: 'SUCCESS_INITIALIZED_FLIP_DETAIL',
    params: params
  }
}

export const failedInitializedFlipDetail = () => {
  return {
    type: 'FAILED_INITIALIZED_FLIP_DETAIL',
  }
}
