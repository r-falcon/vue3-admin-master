import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import defAva from '@/assets/images/profile.jpg'

const user = {
  state: {
    token: getToken(),
    // name: '',
    // avatar: '',
    user: {},
    roles: [],
    permissions: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    // SET_NAME: (state, name) => {
    //   state.name = name
    // },
    // SET_AVATAR: (state, avatar) => {
    //   state.avatar = avatar
    // },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const params = {
        username: userInfo.username,
        password: userInfo.password
      }
      return new Promise((resolve, reject) => {
        login(params)
          .then((res) => {
            setToken(res.data.token)
            commit('SET_TOKEN', res.data.token)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        // getInfo()
        //   .then((res) => {
        //     const user = res.user
        //     const avatar =
        //       user.avatar == '' ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar
        //     if (res.roles && res.roles.length > 0) {
        //       // 验证返回的roles是否是一个非空数组
        //       commit('SET_ROLES', res.roles)
        //       commit('SET_PERMISSIONS', res.permissions)
        //     } else {
        //       commit('SET_ROLES', ['ROLE_DEFAULT'])
        //     }
        //     commit('SET_NAME', user.userName)
        //     commit('SET_AVATAR', avatar)
        //     resolve(res)
        //   })
        //   .catch((error) => {
        //     reject(error)
        //   })

        const res = {
          user: {
            userName: 'falcon',
            nickName: 'xiaodai Rong',
            phonenumber: '15673239790',
            email: 'falcon@126.com',
            dept: '产业互联网事业部/研发中心',
            sex: '1', //0男 1女
            roleGroup: 'Web开发',
            createTime: '2021-11-16 14:20:00',
            avatar: ''
          },
          roles: ['admin'],
          permissions: ['create', 'update', 'delete', 'retrieve']
        }

        const user = res.user
        user.avatar = user.avatar === '' ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar
        if (res.roles && res.roles.length > 0) {
          commit('SET_ROLES', res.roles)
          commit('SET_PERMISSIONS', res.permissions)
        } else {
          commit('SET_ROLES', ['ROLE_DEFAULT'])
        }
        commit('SET_USER', user)
        resolve(res)
      })
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout(state.token)
        //   .then(() => {
        //     commit('SET_TOKEN', '')
        //     commit('SET_ROLES', [])
        //     commit('SET_PERMISSIONS', [])
        //     removeToken()
        //     resolve()
        //   })
        //   .catch((error) => {
        //     reject(error)
        //   })
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_PERMISSIONS', [])
        removeToken()
        resolve()
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
