import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiGetTrend = async (token) => {
  /** トレンドのFlipを取得する
   *  @return
   *  [{
   *    user:
   *      user_id
   *      username
   *      thumbnail
   *    flip:
   *      flip_id
   *      title
   *    item_cnt
   *    bookmark_cnt
   *    good_cnt
   *    create_at
   *  },]
   */
  const res = await request
    .get(API_ENDPOINT + 'trend')

  return res.body
}

