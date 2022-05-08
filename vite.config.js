import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Element-plus
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
  }
})
