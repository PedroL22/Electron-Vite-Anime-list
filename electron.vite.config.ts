import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@assets': resolve('src/renderer/src/assets'),
        '@components': resolve('src/renderer/src/components'),
        '@layout': resolve('src/renderer/src/layout'),
        '@pages': resolve('src/renderer/src/pages'),
        '@entities': resolve('src/renderer/src/entities'),
        '@helpers': resolve('src/renderer/src/helpers'),
        '@routes': resolve('src/renderer/src/routes'),
        '@services': resolve('src/renderer/src/services'),
        '@clients': resolve('src/renderer/src/clients'),
        '@hooks': resolve('src/renderer/src/hooks'),
        '@store': resolve('src/renderer/src/store'),
        '@utils': resolve('src/renderer/src/utils'),
      },
    },
    plugins: [react()],
  },
})
