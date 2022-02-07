import request from '@/utils/request'
const BASE_API = '/private/v1/'

// 获取权限列表
export const allRights = (type) => {
  return request({
    url: `${BASE_API}rights/${type}`,
    method: 'get'
  })
}

// 获取角色列表
export const allRoles = () => {
  return request({
    url: `${BASE_API}roles`,
    method: 'get'
  })
}

// 添加角色
export const addRole = (data) => {
  return request({
    url: `${BASE_API}roles`,
    method: 'post',
    data: data
  })
}

// 编辑角色
export const editRole = (id, data) => {
  return request({
    url: `${BASE_API}roles/${id}`,
    method: 'put',
    data: data
  })
}

// 删除角色
export const deleteRole = (id) => {
  return request({
    url: `${BASE_API}roles/${id}`,
    method: 'delete'
  })
}

// 根据id查询角色
export const roleById = (id) => {
  return request({
    url: `${BASE_API}roles/${id}`,
    method: 'get'
  })
}

// 为角色分配权限
export const attributeRole = (roleId, rids) => {
  return request({
    url: `${BASE_API}roles/${roleId}/rights`,
    method: 'post',
    data: { rids: rids }
  })
}

// 删除角色指定权限
export const delAppointRight = (roleId, rightId) => {
  return request({
    url: `${BASE_API}roles/${roleId}/rights/${rightId}`,
    method: 'delete'
  })
}
