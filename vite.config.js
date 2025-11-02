import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// WAJIB ADA: Untuk memperbaiki alias '@'
import path from "path";

// --- Impor Plugin ---
// 1. Ini adalah plugin Tailwind yang BENAR (sesuai package.json-mu)
import tailwind from "@tailwindcss/vite";
// (Kita TIDAK pakai @tailwindcss/postcss atau autoprefixer di sini)

// 2. Wajib untuk 'ExcelJS'
import { nodePolyfills } from "vite-plugin-node-polyfills";

// 3. Untuk Performa (yang kamu minta)
import viteImagemin from "vite-plugin-imagemin";

// 4. Untuk SEO
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  // ==========================================================
  // FIX #1: Alias '@' (Memperbaiki error "../../assets")
  // ==========================================================
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },

  // ==========================================================
  // PLUGINS (Sesuai tools-mu)
  // ==========================================================
  plugins: [
    vue(),

    // 1. Plugin Tailwind (Otomatis, anti-ribet)
    tailwind(),

    // 2. Plugin ExcelJS (FIX 'global is not defined')
    nodePolyfills(),

    // 3. Plugin Optimasi Gambar (PERINGATAN DI BAWAH)
    viteImagemin({
      apply: "build", // Hanya jalan saat 'yarn build'
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

        // FIX 404 GAMBAR:
        // Kita BIARKAN VITE yang mengurus nama file aset.
        // Blok 'assetFileNames' SENGAJA DIHAPUS karena itu
        // biang kerok 404 gambar di Vercel.
      },
    },
  },
});
