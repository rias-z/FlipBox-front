import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiPostMail = async (email) => {
  /** メールアドレスに仮確認登録メールアドレスを送信する
   *  @param
   *  email
   */
  const res = await request
    .post(API_ENDPOINT + 'prov_register')
    .send({
      'email': email
    })

  return res.body
}
