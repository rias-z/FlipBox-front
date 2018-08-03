import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiTokenCheck = async (token) => {
  /** トークンチェック
   *  @return
   *  {
   *    user:
   *      user_id
   *      username
   *      thumbnail
   *    token:
   *      web_token
   *  }
   */
  const res = await request
    .get(API_ENDPOINT + 'auth/token')
    .set({ Authorization: token })

  return res.body
}

