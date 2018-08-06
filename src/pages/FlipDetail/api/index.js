import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiGetFlipDetail = async (flip_id) => {
  /** flip_idからflipの詳細を取得する
   *  @return
   *  flip:
   *    flip_id
   *    title
   *    item_cnt
   *    bookmark_cnt
   *    good_cnt
   *    create_at
   *  author:
   *    user_id
   *    username
   *    thumbnail
   *  items:
   *    [{
   *      item_id
   *      url
   *      *name
   *      *description
   *    }]
   */
  const res = await request
    .get(API_ENDPOINT + 'flip/' + flip_id)

  return res.body
}

export const apiPostFlipBookmark = async (flip_id) => {
  /** flipをブックマークする
   *  @param
   *  flip_id
   */
  await request
    .post(API_ENDPOINT + 'bookmark')
    .send({'flip_id': flip_id})
}

export const apiPostFlipGood = async (flip_id) => {
  /** flipをいいねする
   *  @param
   *  flip_id
   */
  await request
    .post(API_ENDPOINT + 'good')
    .send({'flip_id': flip_id})
}

export const apiRevertFlipBookmark = async (flip_id) => {
  /** flipのブックマークを取り消す
   *  @param
   *  flip_id
   */
  await request
    .del(API_ENDPOINT + 'bookmark')
    .send({'flip_id': flip_id})
}

export const apiRevertFlipGood = async (flip_id) => {
  /** flipのいいねを取り消す
   *  @param
   *  flip_id
   */
  await request
    .del(API_ENDPOINT + 'good')
    .send({'flip_id': flip_id})
}
