import request from '@/utils/request'
const BASE_API = '/private/v1/'

export const orderList = (params) => {
  return request({
    url: `${BASE_API}orders`,
    method: 'get',
    params: params
  })
}

export const orderById = (orderId) => {
  return request({
    url: `${BASE_API}orders/${orderId}`,
    method: 'get'
  })
}
