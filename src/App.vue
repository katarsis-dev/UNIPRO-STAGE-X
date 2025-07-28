<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class=" flex flex-col items-center w-dvw max-w-[1536px] bg-[#18181b]">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
