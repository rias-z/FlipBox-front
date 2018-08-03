import { apiGetTrend } from './api'
import { successInitializedTop, failedInitializedTop } from './action'


export const initializedTop = () => async (dispatch) => {
  try {
    // trendのflipリストを取得
    const flips = await apiGetTrend()

    dispatch(successInitializedTop({
      flips: flips,
    }))
  } catch (err) {
    // TODO: エラー時のポップアップ表示（時間を置いてリトライ）
    dispatch(failedInitializedTop())
  }
}
