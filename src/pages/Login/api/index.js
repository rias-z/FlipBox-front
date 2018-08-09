import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiPostLogin = async (params) => {
  /** ログイン
   *  @param
   *  email
   *  password
   */
  const res = await request
    .post(API_ENDPOINT + 'login')
    .send(params)

  return res.body
}
