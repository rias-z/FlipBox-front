import { apiGetFlipDetail } from "./api";

import { successInitializedFlipDetail, failedInitializedFlipDetail } from './action'


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
