<script setup>
import { onMounted} from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import heroImage1 from "@/assets/hero-1.jpg"

onMounted(() => {

  const hero_side = document.getElementsByClassName("hero_side")
  const hero_banner = document.getElementsByClassName("hero_banner")[0]
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(scrollTo)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: hero_banner,
      start: "top center",
      toggleActions: "play reset play reset"

    },
  })

  tl.from(hero_side[0],{
    x: -100,
    duration: 0.6,
    ease: "linear"
  },0)
  tl.from(hero_side[1], {
    x: 100,
    duration: 0.6,
    ease: "linear"
  },0)

  tl.from(hero_banner, {
    opacity:0,
    y:30,
    duration: 1,
  })
  document.getElementsByClassName("start_btn")[0].addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#get_started_section",
      ease: "power2.out"
    });
  })
  
});
</script>

<template>
  <div id="hero_section" class="w-full h-[100dvh] flex justify-center items-center relative z-5">
    <div class="absolute z-8 top-0 w-full h-full bg-gradient-to-b from-red-500 via-red-900 to-[#18181B] opacity-30">
    </div>
    <div
      class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
    </div>


    <div
      class=" flex justify-between text-white text-center relative content-center items-center w-full overflow-hidden h-full gap-20 max-lg:mt-10 ">

      <div
        class="hero_side h-[80vh] max-sm:hidden p-10 min-w-4xl absolute m-auto top-20 bottom-0 -left-200 max-lg:-left-210 bg-[#27272A] rounded-br-2xl rounded-tr-2xl shadow-lg shadow-black -skew-x-12 z-10">
      </div>

      <div
        class="hero_banner w-[80%] max-sm:w-[95%] max-sm:skew-x-0  h-[80dvh] relative m-auto left-0 right-0 top-8 bottom-0 bg-[#161616] rounded-2xl shadow-lg shadow-black -skew-x-12 overflow-hidden group z-10">
        <div :style="{ 'backgroundImage': `url(${heroImage1})` }"
          class="w-full max-sm:skew-x-0 flex justify-center absolute items-center scale-110 h-full rounded-2xl  bg-center bg-cover skew-x-10 grayscale-100 opacity-50  z-5">
        </div>
        <div
          class=" w-full transition duration-500 flex justify-center absolute items-center h-full rounded-2xl bg-[#27272A] opacity-40  z-10 group-hover:opacity-20">
        </div>

        <div
          class="flex justify-center flex-col w-full h-full items-center absolute z-20 text-white group-hover:scale-120 transition duration-400">
          <h1 class="font-black text-white-400 text-8xl max-lg:text-6xl">UNIPRO STAGE X</h1>
          <p class="p-2 rounded-xl w-2/4 text-shadow-2xs text-shadow-black text-center text-xs max-md:w-4/5 ">
            UNIPRO adalah Lomba tahunan yang diselenggarakan oleh organisasi HIMPUNAN MAHASISWA SISTEM INFORMASI
            UNIVERSITAS PGRI KANJURUHAN MALANG
          </p>
          <button
            class="start_btn cursor-pointer bg-[#B91C1C] pb-3 pt-3 pl-4 pr-4 font-bold rounded-xl mt-2 hover:bg-[#991B1B] shadow-[#1b1b1b] shadow-md">
            Mulai Sekarang
          </button>
        </div>
      </div>

      <div
        class="hero_side h-[80vh] p-10 max-sm:hidden absolute min-w-4xl m-auto top-20 bottom-0  -right-200 max-lg:-right-210 bg-[#27272A] rounded-bl-2xl rounded-tl-2xl shadow-lg shadow-black -skew-x-12 z-10">
      </div>
    </div>
  </div>
</template>
<script setup>



</script>