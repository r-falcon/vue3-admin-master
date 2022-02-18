<p align="center">
	<img alt="logo" src="https://oscimg.oschina.net/oscnet/up-d3d0a9303e11d522a06cd263f3079027715.png">
</p>
<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">RuoYi v3.8.1</h1>
<h4 align="center">基于SpringBoot+Vue3前后端分离的Java快速开发框架</h4>
<p align="center">
	<a href="https://gitee.com/y_project/RuoYi-Vue/stargazers"><img src="https://gitee.com/y_project/RuoYi-Vue/badge/star.svg?theme=dark"></a>
	<a href="https://gitee.com/y_project/RuoYi-Vue"><img src="https://img.shields.io/badge/RuoYi-v3.8.1-brightgreen.svg"></a>
	<a href="https://gitee.com/y_project/RuoYi-Vue/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg"></a>
</p>

## 平台简介

- 本仓库为前端技术栈 [Vue3](https://v3.cn.vuejs.org) + [Element Plus](https://element-plus.org/zh-CN) + [Vite](https://cn.vitejs.dev) 版本。
- 配套后端代码仓库地址[RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue) 或 [RuoYi-Vue-fast](https://github.com/yangzongzhuan/RuoYi-Vue-fast) 版本。
- 前端技术栈（[Vue2](https://cn.vuejs.org) + [Element](https://github.com/ElemeFE/element) + [Vue CLI](https://cli.vuejs.org/zh)），请移步[RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue/tree/master/ruoyi-ui)。
- 阿里云折扣场：[点我进入](http://aly.ruoyi.vip)，腾讯云秒杀场：[点我进入](http://txy.ruoyi.vip)&nbsp;&nbsp;
- 阿里云优惠券：[点我领取](https://www.aliyun.com/minisite/goods?userCode=brki8iof&share_source=copy_link)，腾讯云优惠券：[点我领取](https://cloud.tencent.com/redirect.php?redirect=1025&cps_key=198c8df2ed259157187173bc7f4f32fd&from=console)&nbsp;&nbsp;

## 前端运行

```bash
# 克隆项目
git clone https://github.com/yangzongzhuan/RuoYi-Vue3.git

# 进入项目目录
cd RuoYi-Vue3

# 安装依赖
yarn --registry=https://registry.npm.taobao.org

# 启动服务
yarn dev

# 构建测试环境 yarn build:stage
# 构建生产环境 yarn build:prod
# 前端访问地址 http://localhost:80
```

## 内置功能

1.  用户管理：用户是系统操作者，该功能主要完成系统用户配置。
2.  部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。
3.  岗位管理：配置系统用户所属担任职务。
4.  菜单管理：配置系统菜单，操作权限，按钮权限标识等。
5.  角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
6.  字典管理：对系统中经常使用的一些较为固定的数据进行维护。
7.  参数管理：对系统动态配置常用参数。
8.  通知公告：系统通知公告信息发布维护。
9.  操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
10. 登录日志：系统登录日志记录查询包含登录异常。
11. 在线用户：当前系统中活跃用户状态监控。
12. 定时任务：在线（添加、修改、删除)任务调度包含执行结果日志。
13. 代码生成：前后端代码的生成（java、html、xml、sql）支持 CRUD 下载 。
14. 系统接口：根据业务代码自动生成相关的 api 接口文档。
15. 服务监控：监视当前系统 CPU、内存、磁盘、堆栈等相关信息。
16. 缓存监控：对系统的缓存信息查询，命令统计等。
17. 在线构建器：拖动表单元素生成相应的 HTML 代码。
18. 连接池监视：监视当前系统数据库连接池状态，可进行分析 SQL 找出系统性能瓶颈。

## 在线体验

- admin/admin123
- 陆陆续续收到一些打赏，为了更好的体验已用于演示服务器升级。谢谢各位小伙伴。

演示地址：http://vue.ruoyi.vip  
文档地址：http://doc.ruoyi.vip

## 演示图

<table>
    <tr>
        <td><img src="https://oscimg.oschina.net/oscnet/cd1f90be5f2684f4560c9519c0f2a232ee8.jpg"/></td>
        <td><img src="https://oscimg.oschina.net/oscnet/1cbcf0e6f257c7d3a063c0e3f2ff989e4b3.jpg"/></td>
    </tr>
    <tr>
        <td><img src="https://oscimg.oschina.net/oscnet/up-8074972883b5ba0622e13246738ebba237a.png"/></td>
        <td><img src="https://oscimg.oschina.net/oscnet/up-9f88719cdfca9af2e58b352a20e23d43b12.png"/></td>
    </tr>
    <tr>
        <td><img src="https://oscimg.oschina.net/oscnet/up-39bf2584ec3a529b0d5a3b70d15c9b37646.png"/></td>
        <td><img src="https://oscimg.oschina.net/oscnet/up-936ec82d1f4872e1bc980927654b6007307.png"/></td>
    </tr>
	<tr>
        <td><img src="https://oscimg.oschina.net/oscnet/up-b2d62ceb95d2dd9b3fbe157bb70d26001e9.png"/></td>
        <td><img src="https://oscimg.oschina.net/oscnet/up-d67451d308b7a79ad6819723396f7c3d77a.png"/></td>
    </tr>	 
    <tr>
        <td><img src="https://oscimg.oschina.net/oscnet/5e8c387724954459291aafd5eb52b456f53.jpg"/></td>
        <td><img src="https://oscimg.oschina.net/oscnet/644e78da53c2e92a95dfda4f76e6d117c4b.jpg"/></td>
    </tr>
	<tr>
        <td><img src="https://oscimg.oschina.net/oscnet/up-8370a0d02977eebf6dbf854c8450293c937.png"/></td>
        <td><img src="https://oscimg.oschina.net/oscnet/up-49003ed83f60f633e7153609a53a2b644f7.png"/></td>
    </tr>
	<tr>
        <td><img src="https://oscimg.oschina.net/oscnet/up-d4fe726319ece268d4746602c39cffc0621.png"/></td>
        <td><img src="https://oscimg.oschina.net/oscnet/up-c195234bbcd30be6927f037a6755e6ab69c.png"/></td>
    </tr>
    <tr>
        <td><img src="https://oscimg.oschina.net/oscnet/b6115bc8c31de52951982e509930b20684a.jpg"/></td>
        <td><img src="https://oscimg.oschina.net/oscnet/up-5e4daac0bb59612c5038448acbcef235e3a.png"/></td>
    </tr>
</table>

## 若依前后端分离交流群

QQ 群： [![加入QQ群](https://img.shields.io/badge/已满-937441-blue.svg)](https://jq.qq.com/?_wv=1027&k=5bVB1og) [![加入QQ群](https://img.shields.io/badge/已满-887144332-blue.svg)](https://jq.qq.com/?_wv=1027&k=5eiA4DH) [![加入QQ群](https://img.shields.io/badge/已满-180251782-blue.svg)](https://jq.qq.com/?_wv=1027&k=5AxMKlC) [![加入QQ群](https://img.shields.io/badge/已满-104180207-blue.svg)](https://jq.qq.com/?_wv=1027&k=51G72yr) [![加入QQ群](https://img.shields.io/badge/已满-186866453-blue.svg)](https://jq.qq.com/?_wv=1027&k=VvjN2nvu) [![加入QQ群](https://img.shields.io/badge/已满-201396349-blue.svg)](https://jq.qq.com/?_wv=1027&k=5vYAqA05) [![加入QQ群](https://img.shields.io/badge/已满-101456076-blue.svg)](https://jq.qq.com/?_wv=1027&k=kOIINEb5) [![加入QQ群](https://img.shields.io/badge/已满-101539465-blue.svg)](https://jq.qq.com/?_wv=1027&k=UKtX5jhs) [![加入QQ群](https://img.shields.io/badge/264312783-blue.svg)](https://jq.qq.com/?_wv=1027&k=EI9an8lJ) 点击按钮入群。

### 克隆项目，安装依赖

`yarn`

### 启动项目

`yarn dev`

### 项目打包

`yarn build:prod`

eslint+prettierrc+husky+commitlint :[https://juejin.cn/post/7038143752036155428]

## 代码风格约束+git 提交规范，参考本 git 中 lint-test 的配置流程

### 代码风格约束

首先安装几个安装包：

- eslint：代码质量检测（用 var 还是 let，用==还是===...）
- prettier：代码风格检测（加不加尾逗号，单引号还是双引号...）
- eslint-config-prettier：解决 ESLint 与 Prettier 的风格冲突
- eslint-plugin-prettier：ESLint 的插件，集成 Prettier 的功能
- eslint-plugin-vue：ESLint 的插件，增加 Vue 的检测能力 `yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue -D`

然后在项目根目录下创建两个文件.eslintrc.js 和 prettier.config.js: 然后使用 ctrl+shift+P 调出控制台输入 Reload Window 配置即可生效

### Git 提交约束,[的配置]

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style：格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- perf：提高性能的代码更改
- test：增加测试
- build：影响构建系统或外部依赖项的更改(示例范围:gulp、broccoli、npm)
- ci：对 ci 配置文件和脚本的更改(示例范围:Travis, Circle, BrowserStack, SauceLabs)
- chore：构建过程或辅助工具的变动
- revert: 恢复以前的提交(回退)

首先安装一下下面几个包：

- husky：触发 Git Hooks,执行脚本
- lint-staged：检测文件，只对暂存区中有改动的文件进行检测，可以在提交前进行 Lint 操作
- commitizen：使用规范化的 message 提交
- commitlint: 检查 message 是否符合规范
- cz-conventional-changelog：适配器。提供 conventional-changelog 标准（约定式提交标准）。基于不同需求，也可以使用不同适配器（比如: cz-customizable） `yarn add husky lint-staged commitizen @commitlint/config-conventional @commitlint/cli -D`

配置适配器： yarn `npx commitizen init cz-conventional-changelog --yarn --dev --exact` npm `npx commitizen init cz-conventional-changelog --save-dev --save-exact`

它会在本地项目中配置适配器，然后去安装 cz-conventional-changelog 这个包，最后在 package.json 文件中生成下面代码：

```js
 "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```

然后在 package.json 中添加一个脚本

```js
  "scripts": {
    "cz": "git cz"
  }
```

在 git bash 中执行`yarn cz`命令来编写一些约定好的提交规范,此时我们已经根据约定规范提交了消息，但是我们怎么知道提交的消息是不是正确的呢需要配置刚刚介绍到的 commitlint，只需要一句命令即可完成配置,它会在项目根目录下面创建一个 commitlint.config.js 配置文件: `echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js` 它会使用@commitlint/config-conventional 这个包里面提供的校验规则进行校验

有了这个校验工具，怎么才可以触发校验呢，我们希望在提交代码的时候就进行校验，这时候 husky 就可以出场了，他可以触发 Git Hook 来执行相应的脚本，而我们只需要把刚刚的校验工具加入脚本就可以了

```js
  "scripts": {
    "lint-staged": "lint-staged",
    "commitlint": "commitlint --config commitlint.config.js -e -V"
  },
  "lint-staged": {
    "src/**/*.{js,vue,md,json}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
```

接下来就是配置 husky 通过触发 Git Hook 执行脚本：

- 设置脚本`prepare`并且立马执行来安装，此时在根目录下会创建一个`.husky`目录 `npm set-script prepare "husky install" && npm run prepare`

- 设置`pre-commit`钩子，提交前执行校验 `npx husky add .husky/pre-commit "yarn lint-staged"`

- 设置`pre-commit`钩子，提交 message 执行校验 `npx husky add .husky/commit-msg "yarn commitlint"`

bug:set-script 是 npm7 后的命令，首先将自己的 npm6 升 7 `npm install --global npm`

### git commit 提交时报错

- 卸载 husky。只要把项目的 package.json 文件中 devDependencies 节点下的 husky 库删掉，然后重新 npm i 一次即可。或者直接在项目根目录下执行 npm uninstall husky --save 也可以，再次提交，自动化测试功能就屏蔽掉
- 进入项目的.git 文件夹(文件夹默认隐藏,可先设置显示或者命令 ls 查找),再进入 hooks 文件夹,删除 pre-commit 文件,重新 git commit -m 'xxx' git push 即可。
- 将 git commit -m "XXX" 改为 git commit --no-verify -m "XXX"

### linux 文本编辑器常用命令

- vim 进入编辑器
- a,o,i 进入编辑，按键 esc 退出
- q<enter>退出； wq<enter>保存退出；q!<enter>强制退出； wq!<enter>强制保存退出

### bug 处理

```js
fatal: Unable to create 'F:/React/umi/vue3-admin-master/.git/index.lock': File exists.

Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process
may have crashed in this repository earlier:
remove the file manually to continue.
```

解决：

- 找到.git/index.lock 文件，直接删除即可
- 执行 git 命令`git clean -f .git/index.lock`

`修改readme.md文件`

### vue3 的 setup composition api + pinia

- 安装 pinia `npm install pinia` or `yarn add pinia`
- 挂载全局实例

```js
import { createPinia } from 'pinia'
app.use(createPinia())
```

- src/store/demo.js 创建一个 store 实例.[两种写法：options api 和 setup].参考对应目录中相应例子的写法

- 业务组件对 store 的调用

```vue
<template>
  <div>
    <h2>count component:</h2>
    <p>count is: {{ count }}</p>
    <p>doubleCount is: {{ doubleCount() }}</p>
    <button @click="increment">add count</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCountStore } from '@/store/demo'

const { count } = storeToRefs(useCountStore())
const { increment, doubleCount } = useCountStore()
</script>
```

- 重复打包问题 pinia 的代码分割机制是把引用它的页面和并打包，当 user 例子被多个页面所引用，user 就会重复打包。解决：全局注册 src/store 目录下创建一个入口文件 index.js，包含一个 registerStore()注册函数，作用是吧整个项目的 store 都提前注册好，最后把所有注册好的 store 挂载到 appStore 传出去

```js
import { useCountStore } from './demo'

const appStore = {}
export const registerStore = () => {
  appStore.useCountStore = useCountStore()
}

export default appStore
```

总线注册

```js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { registerStore } from '@/store'

const app = createApp(App)

app.use(createPinia())
// 注册pinia状态管理库
registerStore()

app.mount('#app')
```

内部引用

```vue
// src/components/PiniaBasicSetup.vue
<script setup lang="ts" name="component-PiniaBasicSetup">
import { storeToRefs } from 'pinia'
import appStore from '@/store'

// setup composition API模式
const { count } = storeToRefs(appStore.useCounterStoreForSetup)
const { increment, doubleCount } = appStore.useCounterStoreForSetup
</script>

<template>
  <div class="box-styl">
    <h1>Setup模式</h1>
    <p class="section-box">
      Pinia的state: count = <b>{{ count }}</b>
    </p>
    <p class="section-box">
      Pinia的getters: doubleCount() = <b>{{ doubleCount() }}</b>
    </p>
    <div class="section-box">
      <p>Pinia的action: increment()</p>
      <button @click="increment">点我</button>
    </div>
  </div>
</template>
```

打包解耦

```js
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    // ...其他配置

    build: {
      // ...其他配置

      rollupOptions: {
        output: {
          manualChunks(id) {
            // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
            if (id.includes(path.resolve(__dirname, '/src/store/index.ts'))) {
              return 'vendor'
            }
          }
        }
      }
    }
  }
})
```
