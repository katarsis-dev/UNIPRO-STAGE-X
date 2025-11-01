import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// WAJIB ADA: Untuk memperbaiki alias '@'
import path from "path";

// --- Impor Plugin ---
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import { nodePolyfills } from "vite-plugin-node-polyfills"; // Untuk ExcelJS
import viteImagemin from "vite-plugin-imagemin"; // Untuk Performa
import sitemap from "vite-plugin-sitemap"; // Untuk SEO

// https://vitejs.dev/config/
export default defineConfig({
  // ===========================================
  // 1. FIX WAJIB: Resolve Alias '@'
  // Ini adalah FIX untuk error "../../assets/logo.png"
  // ===========================================
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ===========================================
  // 2. PLUGINS
  // ===========================================
  plugins: [
    vue(),

    // Wajib ada untuk 'ExcelJS' (dari riwayat kita)
    nodePolyfills(),

    // FOKUS PERFORMA: Optimasi Gambar
    // Ini yang kamu minta. Ini HANYA berjalan saat 'yarn build'
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

    // FOKUS SEO: Membuat sitemap.xml
    sitemap({
      // GANTI DENGAN URL DOMAIN PRODUKSI-mu
      hostname: "https://nama-domain-kamu.com",
    }),

    // TIDAK ADA 'vite-plugin-checker' (biang kerok typescript)
  ],

  // ===========================================
  // 3. CSS (Tailwind)
  // ===========================================
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },

  // ===========================================
  // 4. KONFIGURASI BUILD (PERFORMA & FIX 404)
  // ===========================================
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

        // KITA BIARKAN VITE YANG MENGATUR NAMA FILE ASET
        // Ini adalah FIX untuk error 404 gambar di Vercel.
        // TIDAK ADA 'assetFileNames' di sini.
      },
    },
  },
});
