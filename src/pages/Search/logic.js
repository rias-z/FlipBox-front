// import queryString from 'query-string'

import { apiGetSearchFlip } from "./api";

import { successGetSearchFlip } from './action'

// export const checkQuery = (values) => {
//   /** クエリ文字列をチェックする
//    */
//   let result = {}

//   // 不要なqueryの削除
//   for (let key in values) {
//     if (['q', 'p', 's'].includes(key)) {
//       result[key] = values[key]
//     }
//   }

//   // queryが設定されていない場合，nullで返却する
//   return result['q'] ? result : null
// }

export const getSearchFlip = (query) => async (dispatch) => {
  try {
    const result = await apiGetSearchFlip(query)

    dispatch(successGetSearchFlip(result))
  } catch (err) {
    // TODO: エラー時のポップアップ表示
  }
}
