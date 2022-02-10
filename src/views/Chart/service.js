import request from '@/utils/request'
const BASE_API = '/private/v1/'

export const echartsData = () => {
  return request({
    url: `${BASE_API}reports/type/1`,
    method: 'get'
  })
}
