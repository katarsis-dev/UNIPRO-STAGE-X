import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

import tailwind from "@tailwindcss/vite";

import { nodePolyfills } from "vite-plugin-node-polyfills";

import viteImagemin from "vite-plugin-imagemin";

import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },

  plugins: [
    vue(),

    tailwind(),

    nodePolyfills(),

    viteImagemin({
      apply: "build",
      verbose: true,
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      svgo: {
        plugins: [{ name: "removeViewBox" }, { name: "removeEmptyAttrs" }],
      },
    }),

    sitemap({
      hostname: "https://www.unipro-unikama.com",
      generateRobotsTxt: false,
    }),
  ],

  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("gsap")) {
            return "gsap";
          }
          if (id.includes("vue") || id.includes("@vue")) {
            return "vue";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
