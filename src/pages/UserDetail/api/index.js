import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiGetUserDetail = async (username) => {
  /** usernameからuserの詳細を取得する
   */
  const res = await request
    .get(API_ENDPOINT + 'user/' + username)

  return res.body
}
