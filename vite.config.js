import { fileURLToPath, URL } from "url";
import path from 'path'

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  /* resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    },
  }, */
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/variables.scss";`
      }
    }
  },
});
