import request from '@/utils/request'
const BASE_API = '/private/v1/'

// 商品列表
export const goodsList = (params) => {
  return request({
    url: `${BASE_API}goods`,
    method: 'get',
    params: params
  })
}

// 商品分类
export const goodsSort = (params) => {
  return request({
    url: `${BASE_API}categories`,
    method: 'get',
    params: params
  })
}

// 分类参数
export const sortParams = (sortId, params) => {
  return request({
    url: `${BASE_API}categories/${sortId}/attributes`,
    method: 'get',
    params: params
  })
}

// 添加商品
export const goodsAdd = (data) => {
  return request({
    url: `${BASE_API}goods`,
    method: 'post',
    data: data
  })
}

// 根据id查询商品
export const goodsById = (id) => {
  return request({
    url: `${BASE_API}goods/${id}`,
    method: 'get'
  })
}

// 修改商品
export const goodsUpdate = (id, data) => {
  return request({
    url: `${BASE_API}goods/${id}`,
    method: 'put',
    data: data
  })
}

// 删除商品
export const goodsDelete = (id) => {
  return request({
    url: `${BASE_API}goods/${id}`,
    method: 'delete'
  })
}
