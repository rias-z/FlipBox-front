import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiGetTrend = async () => {
  /** トレンドのFlipを取得する
   *  @return
   *  [{
   *    flip:
   *      flip_id
   *      title
   *      item_cnt
   *      bookmark_cnt
   *      good_cnt
   *      create_at
   *    author:
   *      user_id
   *      username
   *      thumbnail
   *  },]
   */
  const res = await request
    .get(API_ENDPOINT + 'trend')

  return res.body
}

