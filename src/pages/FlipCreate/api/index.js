import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiPostFlip = async (params) => {
  /** flip_idからflipの詳細を取得する
   *  @param
   *  flip:
   *    *tags
   *    *title
   *  items:
   *    [{
   *      url
   *      *name
   *      *description
   *    }]
   *  @return
   *  flip_id
   */
  const res = await request
    .post(API_ENDPOINT + 'flip')
    .send(params)

  return res.body
}
