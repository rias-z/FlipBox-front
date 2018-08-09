import { apiPostLogin } from "./api"

// action (App)
import { successTokenCheck } from '../../containers/App/action'

// utils
import { manageLocalStorage } from '../../utils/manageLocalStorage'


export const postLogin = (props, params) => async (dispatch) => {
  try {
    const result = await apiPostLogin(params)

    for (let key in result) {
      manageLocalStorage.set(result[key])
    }

    dispatch(successTokenCheck({
      isAuthenticated: true,
      isTokenChecked: true,
      username: result.user.username,
    }))

    // '/'に遷移する
    props.history.push('/')
  } catch (err) {
    // TODO: エラー時のポップアップ表示
    console.log(err)
  }
}

