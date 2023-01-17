import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: false,
      dirs: ['src/components'], // 按需加载的文件
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: '@ant-design/icons-vue'
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      // 引入全局样式
      scss: {
        additionalData: '@import "@/assets/styles/style.scss"; @import "@/assets/styles/base.scss";',
        javascriptEnabled: true
      }
    }
  }
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000",
  //       changeOrigin: true,
  //     }
  //   }
  // }




  // {
  //   // 自动引入图标组件，需要安装@ant-design/icon-vue
  //   resolveIcons: true
  // }
})
