import { constantRoutes } from '@/router'
// import { getRouters } from '@/api/menu'
import Layout from '@/layout/index'
// import ParentView from '@/components/ParentView'
// import InnerLink from '@/layout/components/InnerLink'

// 匹配views里面所有的.vue文件
const modules = import.meta.glob('./../../views/**/*.vue')

const permission = {
  state: {
    routes: [],
    addRoutes: []
    // defaultRoutes: [],
    // topbarRouters: [],
    // sidebarRouters: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
    // SET_DEFAULT_ROUTES: (state, routes) => {
    //   state.defaultRoutes = constantRoutes.concat(routes)
    // },
    // SET_TOPBAR_ROUTES: (state, routes) => {
    //   // 顶部导航菜单默认添加统计报表栏指向首页
    //   const index = [{
    //     path: 'index',
    //     meta: { title: '统计报表', icon: 'dashboard' }
    //   }]
    //   state.topbarRouters = routes.concat(index);
    // },
    // SET_SIDEBAR_ROUTERS: (state, routes) => {
    //   state.sidebarRouters = routes
    // },
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise((resolve) => {
        // 向后端请求路由数据
        // getRouters().then(res => {
        //   const sdata = JSON.parse(JSON.stringify(res.data))
        //   const rdata = JSON.parse(JSON.stringify(res.data))
        //   const defaultData = JSON.parse(JSON.stringify(res.data))
        //   const sidebarRoutes = filterAsyncRouter(sdata)
        //   const rewriteRoutes = filterAsyncRouter(rdata, false, true)
        //   const defaultRoutes = filterAsyncRouter(defaultData)
        //   commit('SET_ROUTES', rewriteRoutes)
        //   commit('SET_SIDEBAR_ROUTERS', constantRoutes.concat(sidebarRoutes))
        //   commit('SET_DEFAULT_ROUTES', sidebarRoutes)
        //   commit('SET_TOPBAR_ROUTES', defaultRoutes)
        //   resolve(rewriteRoutes)
        // })

        // 向后台请求动态路由，设置假路由数据
        var res = {
          code: 200,
          msg: '获取动态路由成功',
          data: [
            // 用户管理
            {
              name: 'User',
              path: '/user',
              redirect: 'noRedirect',
              component: 'Layout',
              meta: {
                title: '用户管理',
                icon: ''
              },
              children: [
                {
                  name: 'Ulist',
                  path: 'ulist',
                  redirect: null,
                  component: 'User/index',
                  hidden: false,
                  meta: {
                    title: '用户列表',
                    icon: ''
                  }
                }
              ]
            },

            // 权限管理
            {
              name: 'Rights',
              path: '/rights',
              redirect: 'noRedirect',
              component: 'Layout',
              meta: {
                title: '权限管理',
                icon: ''
              },
              children: [
                {
                  name: 'Rlist',
                  path: 'rlist',
                  redirect: null,
                  component: 'Rights/index',
                  hidden: false,
                  meta: {
                    title: '权限列表',
                    icon: ''
                  }
                },
                {
                  name: 'Role',
                  path: 'role',
                  redirect: null,
                  component: 'Rights/role',
                  hidden: false,
                  meta: {
                    title: '角色列表',
                    icon: ''
                  }
                }
              ]
            },

            // 商品管理
            {
              name: 'Goods',
              path: '/goods',
              redirect: 'noRedirect',
              component: 'Layout',
              meta: {
                title: '商品管理',
                icon: ''
              },
              children: [
                {
                  name: 'Glist',
                  path: 'glist',
                  redirect: null,
                  component: 'Goods/index',
                  hidden: false,
                  meta: {
                    title: '商品列表',
                    icon: ''
                  }
                },
                {
                  name: 'Params',
                  path: 'params',
                  redirect: null,
                  component: 'Goods/params',
                  hidden: false,
                  meta: {
                    title: '分类参数',
                    icon: ''
                  }
                },
                {
                  name: 'Gadd',
                  path: 'gadd',
                  redirect: null,
                  component: 'Goods/itemAdd',
                  hidden: true,
                  meta: {
                    title: '商品操作',
                    icon: ''
                  }
                }
              ]
            },

            // 订单管理
            {
              name: 'Order',
              path: '/order',
              redirect: 'noRedirect',
              component: 'Layout',
              meta: {
                title: '订单管理',
                icon: ''
              },
              children: [
                {
                  name: 'Olist',
                  path: 'olist',
                  redirect: null,
                  component: 'Order/index',
                  hidden: false,
                  meta: {
                    title: '订单列表',
                    icon: ''
                  }
                }
              ]
            },

            // 订单管理
            {
              name: 'Chart',
              path: '/chart',
              redirect: 'noRedirect',
              component: 'Layout',
              meta: {
                title: '数据统计',
                icon: ''
              },
              children: [
                {
                  name: 'Achart',
                  path: 'achart',
                  redirect: null,
                  component: 'Chart/index',
                  hidden: false,
                  meta: {
                    title: '统计报表',
                    icon: ''
                  }
                }
              ]
            }
          ]
          // data: [
          //   {
          //     name: 'System',
          //     path: '/system',
          //     redirect: 'noRedirect',
          //     component: 'Layout',
          //     meta: {
          //       title: '系统维护',
          //       icon: 'system'
          //     },
          //     children: [
          //       {
          //         name: 'User',
          //         path: 'user',
          //         redirect: null,
          //         component: 'system/user/index',
          //         hidden: false,
          //         meta: {
          //           title: '用户管理',
          //           icon: 'user'
          //         }
          //       },
          //       {
          //         name: 'Menu',
          //         path: 'menu',
          //         redirect: null,
          //         component: 'system/menu/index',
          //         hidden: false,
          //         meta: {
          //           title: '菜单管理',
          //           icon: 'table'
          //         }
          //       }
          //     ]
          //   }
          // ]
        }
        const accessedRoutes = filterAsyncRouter(res.data)
        // accessedRoutes.push({
        //   path: '*',
        //   redirect: '/404',
        //   hidden: true
        // })
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
}

// 遍历后台传来的路由字符串，转换为组件对象
export function filterAsyncRouter(asyncRouterMap) {
  return asyncRouterMap.filter((route) => {
    if (route.component) {
      // Layout组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
}

// function filterAsyncRouter(asyncRouterMap, lastRouter = false, type = false) {
//   return asyncRouterMap.filter((route) => {
//     if (type && route.children) {
//       route.children = filterChildren(route.children)
//     }
//     if (route.component) {
//       // Layout ParentView 组件特殊处理
//       if (route.component === 'Layout') {
//         route.component = Layout
//       } else if (route.component === 'ParentView') {
//         route.component = ParentView
//       } else if (route.component === 'InnerLink') {
//         route.component = InnerLink
//       } else {
//         route.component = loadView(route.component)
//       }
//     }
//     if (route.children != null && route.children && route.children.length) {
//       route.children = filterAsyncRouter(route.children, route, type)
//     } else {
//       delete route['children']
//       delete route['redirect']
//     }
//     return true
//   })
// }

// function filterChildren(childrenMap, lastRouter = false) {
//   var children = []
//   childrenMap.forEach((el, index) => {
//     if (el.children && el.children.length) {
//       if (el.component === 'ParentView' && !lastRouter) {
//         el.children.forEach((c) => {
//           c.path = el.path + '/' + c.path
//           if (c.children && c.children.length) {
//             children = children.concat(filterChildren(c.children, c))
//             return
//           }
//           children.push(c)
//         })
//         return
//       }
//     }
//     if (lastRouter) {
//       el.path = lastRouter.path + '/' + el.path
//     }
//     children = children.concat(el)
//   })
//   return children
// }

export const loadView = (view) => {
  let res
  for (const path in modules) {
    const dir = path.split('views/')[1].split('.vue')[0]
    if (dir === view) {
      res = () => modules[path]()
    }
  }
  return res
}

export default permission
