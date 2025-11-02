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

    // 4. Plugin SEO (FIX 'robots.txt' crash)
    sitemap({
      hostname: "https://nama-domain-kamu.com", // GANTI DENGAN URL-mu
      generateRobotsTxt: false, // <-- FIX build crash
    }),

    // TIDAK ADA 'vite-plugin-checker' (biang kerok typescript)
  ],

  // ==========================================================
  // CSS (KOSONG, karena 'tailwind()' sudah mengurusnya)
  // ==========================================================
  // Blok 'css: { postcss: ... }' SENGAJA DIHAPUS karena
  // @tailwindcss/vite sudah otomatis mengurusnya.
  // Ini adalah FIX untuk error 'Cannot find package @tailwindcss/postcss'.

  // ==========================================================
  // KONFIGURASI BUILD (PERFORMA & FIX 404 GAMBAR)
  // ==========================================================
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // FOKUS PERFORMA: Code Splitting untuk GSAP & Vue
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
