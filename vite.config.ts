import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { isCustomElement, transformAssetUrls } from "vue3-pixi/compiler"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ template: {
      compilerOptions: {isCustomElement}
      }
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
