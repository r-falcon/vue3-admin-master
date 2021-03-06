import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import createVitePlugins from './vite/plugins'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    // plugins: [createVitePlugins(env, command === 'build'), vue(), vueJsx()],
    plugins: [createVitePlugins(env, command === 'build')],
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // vite 相关配置
    server: {
      port: 80,
      host: true,
      open: true,
      // proxy: {
      //   // https://cn.vitejs.dev/config/#server-proxy
      //   '/dev-api': {
      //     target: 'http://localhost:8080',
      //     changeOrigin: true,
      //     rewrite: (p) => p.replace(/^\/dev-api/, '')
      //   }
      // },
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8888/api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
