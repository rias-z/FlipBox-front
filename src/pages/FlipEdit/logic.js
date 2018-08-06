// FlipDetail
import { apiGetFlipDetail } from "../FlipDetail/api";

import {
  successInitializedFlipEdit,
} from './action'


export const initializedFlipEdit = (flip_id) => async (dispatch) => {
  try {
    // flip_idに紐づくflip詳細情報を取得する
    const flipDetail = await apiGetFlipDetail(flip_id)

    dispatch(successInitializedFlipEdit({
      flipDetail: flipDetail,
    }))
  } catch (err) {
    // TODO: エラー時のポップアップ表示
  }
}
