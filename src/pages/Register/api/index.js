import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiPostRegister = async (params) => {
  /** メールアドレスに仮確認登録メールアドレスを送信する
   *  @param
   *  username
   *  password
   */
  const res = await request
    .post(API_ENDPOINT + 'register')
    .send(params)

  return res.body
}
