import request from '@/utils/request'
const BASE_API = '/private/v1/'

// 获取用户列表
export const getUsers = (params) => {
  return request({
    url: `${BASE_API}users`,
    method: 'get',
    params: params
  })
}

// 修改用户状态
export const UpdateState = (uId, type) => {
  return request({
    url: `${BASE_API}users/${uId}/state/${type}`,
    method: 'put'
  })
}

// 添加用户
export const addUser = (data) => {
  return request({
    url: `${BASE_API}users`,
    method: 'post',
    data: data
  })
}

// 修改用户
export const editUser = (id, data) => {
  return request({
    url: `${BASE_API}users/${id}`,
    method: 'put',
    data: data
  })
}

// 删除用户
export const deleteUser = (id) => {
  return request({
    url: `${BASE_API}users/${id}`,
    method: 'delete'
  })
}

// 获取角色列表
export const roleData = () => {
  return request({
    url: `${BASE_API}roles`,
    method: 'get'
  })
}

// 分配用户角色
export const setUser = (id, rid) => {
  return request({
    url: `${BASE_API}users/${id}/role`,
    method: 'put',
    data: { rid: rid }
  })
}
