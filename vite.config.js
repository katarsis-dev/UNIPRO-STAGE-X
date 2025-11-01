import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// --- Impor Plugin ---
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import viteImagemin from "vite-plugin-imagemin";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  // ===========================================
  // 1. PLUGINS
  // ===========================================
  plugins: [
    vue(),

    // Wajib ada untuk ExcelJS (dari riwayat kita)
    nodePolyfills(),

    // FOKUS PERFORMA: Optimasi Gambar
    // Plugin ini hanya berjalan saat 'yarn build'
    viteImagemin({
      apply: "build",
      verbose: true, // Tampilkan log kompresi
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      svgo: {
        plugins: [{ name: "removeViewBox" }, { name: "removeEmptyAttrs" }],
      },
    }),

    // FOKUS SEO: Membuat sitemap.xml
    sitemap({
      // GANTI DENGAN URL DOMAIN PRODUKSI-mu
      hostname: "https://www.unipro-unikama.com",
    }),
  ],

  // ===========================================
  // 2. CSS (Tailwind)
  // ===========================================
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },

  // ===========================================
  // 3. KONFIGURASI BUILD (PERFORMA)
  // ===========================================
  build: {
    // Matikan sourcemap untuk produksi
    sourcemap: false,

    // Konfigurasi Rollup
    rollupOptions: {
      output: {
        // FOKUS PERFORMA: Code Splitting
        // Ini adalah konfigurasi AMAN yang kita temukan.
        // Ini memisahkan 'gsap' dan 'vue' ke file sendiri agar cache lebih efisien.
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
