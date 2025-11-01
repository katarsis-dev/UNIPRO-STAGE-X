import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// --- Impor Plugin ---
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import { nodePolyfills } from "vite-plugin-node-polyfills"; // Untuk ExcelJS
import sitemap from "vite-plugin-sitemap"; // Untuk SEO
import path from "path"
export default defineConfig({
  plugins: [
    vue(),

    // Wajib ada untuk ExcelJS (dari riwayat kita)
    nodePolyfills(),

    // FOKUS SEO: Membuat sitemap.xml
    sitemap({
      hostname: "https://nama-domain-kamu.com", // GANTI INI
    }),

    // KITA HAPUS TOTAL viteImagemin DARI SINI
  ],

  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },

  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Konfigurasi rollupOptions.output yang AMAN (dari config terakhir kita)
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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
