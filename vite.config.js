import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  base: "/",
  build: {
    target: "es2015",
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap:false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    viteImagemin({
      mozjpeg: { quality: 70 },
      pngquant: { quality: [0.65, 0.8] },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
});
