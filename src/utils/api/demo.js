import { requestGet, requestPost } from './index.js'

const mock = 'https://www.easy-mock.com/mock/5c9c6c5468287c398d2057c4/s'

// get
export function getDemo (params) {
  return requestGet(mock + `/omp/skuData/getAllSku`, params).then(res => res.data)
}

// post
export function postDemo (params) {
  return requestPost(mock + `/rest/v1/enterprise/list`, params).then(res => res.data)
}
