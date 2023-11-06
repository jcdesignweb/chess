import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "./public/scss/main.scss";`, // Ruta al archivo SCSS principal
      },
    },
  },
});
