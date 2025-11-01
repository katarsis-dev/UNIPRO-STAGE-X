import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    vue(),

    viteImagemin({
      apply: "build",
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
      verbose: true, // Tampilkan log kompresi di terminal
    }),
  ],

  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },

  build: {
    sourcemap: false,

    // Opsi untuk Rollup (bundler di balik Vite)
    rollupOptions: {
      output: {
        // Logika untuk memisahkan library besar ke file-nya sendiri
        // Ini meningkatkan caching di browser user
        manualChunks(id) {
          // Pisahkan GSAP ke chunk sendiri (gsap.js)
          if (id.includes("gsap")) {
            return "gsap";
          }
          // Pisahkan Vue, Vue Router, dll. ke chunk sendiri (vue.js)
          if (id.includes("vue") || id.includes("@vue")) {
            return "vue";
          }
          // Sisanya dari node_modules masuk ke vendor.js
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },

        // Pola penamaan file aset (gambar, font)
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").pop();
          // Kelompokkan gambar ke folder 'img'
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          // Kelompokkan font ke folder 'font'
          else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = "font";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },

        // Pola penamaan file chunk JS
        chunkFileNames: "assets/js/[name]-[hash].js",
        // Pola penamaan file JS utama
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
