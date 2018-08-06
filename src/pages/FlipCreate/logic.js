import { apiPostFlip } from "./api"
import { successPostFlip } from './action'


export const postFlip = (props, params) => async (dispatch) => {
  try {
    const result = await apiPostFlip(params)

    const flip_id = result.flip_id

    // /flip/<flip_id>に遷移する
    props.history.push('/flip/' + flip_id)
  } catch (err) {
    // TODO: エラー時のポップアップ表示
  }
}
