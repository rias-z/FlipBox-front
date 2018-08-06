import {
  apiGetFlipDetail,
  apiPostFlipBookmark,
  apiPostFlipGood,
  apiRevertFlipBookmark,
  apiRevertFlipGood,
} from "./api";

import {
  successInitializedFlipDetail,
  failedInitializedFlipDetail,
  successPostFlipBookmark,
  successPostFlipGood,
  successRevertFlipGood,
  successRevertFlipBookmark,
} from './action'


export const initializedFlipDetail = (flip_id) => async (dispatch) => {
  try {
    // flip_idに紐づくflip詳細情報を取得する
    const flipDetail = await apiGetFlipDetail(flip_id)

    dispatch(successInitializedFlipDetail({
      flipDetail: flipDetail,
    }))
  } catch (err) {
    // TODO: エラー時のポップアップ表示（時間を置いてリトライ）
    // TODO: flip_idに紐づくflipが存在しない場合，404ページを表示する
    if (err.status === 404) {
      console.log("Error: 404 not found")
    }
    dispatch(failedInitializedFlipDetail())
  }
}

export const postFlipBookmark = (flip_id) => async (dispatch) => {
  try {
    await apiPostFlipBookmark(flip_id)
    dispatch(successPostFlipBookmark())
  } catch (err) {
    // TODO: エラー時のポップアップ表示
  }
}

export const postFlipGood = (flip_id) => async (dispatch) => {
  try {
    await apiPostFlipGood(flip_id)
    dispatch(successPostFlipGood())
  } catch (err) {
    // TODO: エラー時のポップアップ表示
  }
}

export const revertFlipBookmark = (flip_id) => async (dispatch) => {
  try {
    await apiRevertFlipBookmark(flip_id)
    dispatch(successRevertFlipBookmark())
  } catch (err) {
    // TODO: エラー時のポップアップ表示
  }
}

export const revertFlipGood = (flip_id) => async (dispatch) => {
  try {
    await apiRevertFlipGood(flip_id)
    dispatch(successRevertFlipGood())
  } catch (err) {
    // TODO: エラー時のポップアップ表示
  }
}
