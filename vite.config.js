import { defineConfig } from 'vite';

// 提供 Vue 3 单文件组件支持
import vue from '@vitejs/plugin-vue';

// Element-plus
// 根据 templte(木板字符串)中使用的 element-ui组件自动导入相应的组件及样式
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // Element-plus
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: [
      { find : '@', replacement: '/src'}
    ]
  },
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
      },
    }
  }
})
