import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
/*export default defineConfig({
})
*/
export default defineConfig(({ command }) => {
  return {
    plugins: [vue()],
    build: {
      chunkSizeWarningLimit: 1600,
    },
    resolve: {
      alias: [
        {
          find: "@vue/runtime-core",
          replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
        },
      ],
    },
  };
});