import request from 'superagent'


import { API_ENDPOINT } from '../../../config'


export const apiGetSearchFlip = async (query) => {
  const res = await request
    .get(API_ENDPOINT + 'search' + query)

  return res.body
}
