import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default ({mode}) => {
  const env = loadEnv(mode,process.cwd(),"VITE_")

  return defineConfig({
    plugins: [vue(),tailwindcss()],
    base: "/",

    //optimizing dependencies for vue and gsap
    optimizeDeps: {
     include : ['vue','gsap']
    },

    //optimize build output / production gonna optimize soon 
    build: {
        target:"es2015",
        sourcemap: mode !== "production",
        minify:"esbuild",
    }
  })
}
