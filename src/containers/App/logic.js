import { apiTokenCheck } from './api'
import { successLogout, successTokenCheck } from './action'

// utils
import { manageLocalStorage } from '../../utils/manageLocalStorage'


export const initializedApp = () => async (dispatch) => {
  try {
    // localStorageにtokenがあるかどうかチェック
    const webToken = clientTokenCheck()

    if (!webToken) {
      dispatch(successTokenCheck({
        isAuthenticated: false,
        isTokenChecked: true
      }))

      return
    }

    // user情報とweb_tokenを取得
    const result = await apiTokenCheck(webToken)

    // 必要なデータをlocalStorageに保存
    for (let key in result) {
      manageLocalStorage.set(result[key])
    }

    dispatch(successTokenCheck({
      isAuthenticated: true,
      isTokenChecked: true,
      userId: result.user.user_id,
      username: result.user.username,
    }))
  } catch (err) {
    // ログアウト
    // TODO: エラー時のポップアップ表示
    // TODO 400: web_tokenがミスマッチの場合
    // TODO 500: 内部サーバエラー
    dispatch(logout())
  }
}

export const clientTokenCheck = () => {
  /** webTokenがlocalStorageにあるかどうかチェックする
   * @return webToken
   */
  return manageLocalStorage.get('web_token')
}

export const logout = () => (dispatch) => {
  /** ログアウト
   */
  manageLocalStorage.clear()
  dispatch(successLogout())
}