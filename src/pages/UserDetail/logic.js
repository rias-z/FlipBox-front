import {
  apiGetUserDetail,
} from "./api";

import {
  successInitializedUserDetail,
} from './action'


export const initializedUserDetail = (username) => async (dispatch) => {
  try {
    const userDetail = await apiGetUserDetail(username)

    dispatch(successInitializedUserDetail({
      userDetail: userDetail,
    }))
  } catch (err) {
    // TODO: エラー時のポップアップ表示
  }
}
