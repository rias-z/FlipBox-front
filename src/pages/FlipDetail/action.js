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

export const successPostFlipBookmark = () => {
  return {
    type: 'SUCCESS_POST_FLIP_BOOKMARK',
  }
}

export const successPostFlipGood = () => {
  return {
    type: 'SUCCESS_POST_FLIP_GOOD',
  }
}

export const successRevertFlipBookmark = () => {
  return {
    type: 'SUCCESS_REVERT_FLIP_BOOKMARK',
  }
}

export const successRevertFlipGood = () => {
  return {
    type: 'SUCCESS_REVERT_FLIP_GOOD',
  }
}
