<script setup>
import Aos from "aos";
import 'aos/dist/aos.css';
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  Aos.init({
    duration: 800,
    once: false,
    startEvent: 'DOMContentLoaded',
    easing:"ease",
    mirror:false
  })
})
watch(() => route.fullPath, () => {
  Aos.refresh()
})

</script>

<template>
  <div class=" flex flex-col items-center w-dvw max-w-[1536px] bg-[#18181b]">
    <RouterView />
  </div>
</template>

<style scoped></style>
