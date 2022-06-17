import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // lib: {
    //   entry: path.resolve(__dirname, 'lib/main.js'),
    //   name: 'UtilsLib',
    //   // the proper extensions will be added
    //   fileName: 'utils-lib'
    // },
    // rollupOptions: {
    //   // 确保外部化处理那些你不想打包进库的依赖
    //   external: ['react'],
    //   output: {
    //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    //     globals: {
    //       react: 'React'
    //     }
    //   } 
    // }
  },
})
