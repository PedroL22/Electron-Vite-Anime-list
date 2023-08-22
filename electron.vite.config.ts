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
        '@components': resolve('src/renderer/src/components'),
        '@entities': resolve('src/renderer/src/entities'),
        '@helpers': resolve('src/renderer/src/helpers'),
        '@pages': resolve('src/renderer/src/pages'),
        '@routes': resolve('src/renderer/src/routes'),
        '@services': resolve('src/renderer/src/services'),
        '@clients': resolve('src/renderer/src/clients'),
        '@hooks': resolve('src/renderer/src/hooks'),
        '@layouts': resolve('src/renderer/src/layouts'),
        '@store': resolve('src/renderer/src/store'),
        '@utils': resolve('src/renderer/src/utils'),
      },
    },
    plugins: [react()],
  },
})
