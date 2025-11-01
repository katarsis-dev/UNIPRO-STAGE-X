<script setup>
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import logo from "../assets/logo.png"

import { onMounted, onUnmounted, useTemplateRef } from 'vue';


const navbar_btn = useTemplateRef("navbar_btn");
const black_bg = useTemplateRef("bg-black-transparent");
const navigation = useTemplateRef("nav");

function navbarEvent() {
  if (window.innerWidth < 768) {
    navigation.value.classList.remove("flex")
    navigation.value.classList.add("hidden")
  } else if (window.innerWidth >= 768) {
    navigation.value.classList.remove("hidden")
    navigation.value.classList.add("flex")
  }
}


onMounted(() => {
  gsap.registerPlugin(ScrollToPlugin) 
  const nav_btn = document.getElementsByClassName("nav-btn");


  document.getElementsByClassName("hero-btn")[0].addEventListener("click",() => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#hero_section",
      ease: "power2.out"
    });
  })

  nav_btn[0].addEventListener("click",() => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#brief_section",
      ease: "power2.out"
    });
  })

  nav_btn[1].addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#timeline_section",
      ease: "power2.out"
    });
  })

  nav_btn[2].addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#skema_section",
      ease: "power2.out"
    });
  })

  nav_btn[3].addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#faq_section",
      ease: "power2.out"
    });
  })

  navbar_btn.value.addEventListener("click", () => {
    if (navigation.value.classList.contains("max-md:hidden")){
      navigation.value.classList.remove("max-md:hidden")
      navigation.value.classList.add("max-md:flex")
      black_bg.value.classList.remove("hidden")
      black_bg.value.classList.add("inline_block")
    } else {
      navigation.value.classList.add("max-md:hidden")
      navigation.value.classList.remove("max-md:flex")
      black_bg.value.classList.remove("inline_block")
      black_bg.value.classList.add("hidden")
    }
  })
  
  window.addEventListener("resize", navbarEvent)
});

onUnmounted(() => {
  window.removeEventListener("resize",navbarEvent)
})

</script>

<template>
  <div ref="bg-black-transparent" class="fixed z-20 hidden bg-[rgba(0_0_0/0.5)] left-0 bottom-0 top-0 right-0 "></div>

  <nav class="w-[100%] flex items-center justify-center fixed z-50">

    <div
      class="w-[90%]  max-w-[1360px] inset-shadow-2xs border-4 border-t-0 border-[#262626] m-0  flex flex-nowrap justify-between shadow-black shadow-2xl rounded-b-3xl pl-4 pr-4 bg-black content-center">
      <button class="hero-btn cursor-pointer">
        <img :src="logo" alt="" class="w-[100px]">
      </button>
      <div class="min-md:hidden flex items-center">
        <button ref="navbar_btn"
          class="py-6 px-7 rounded-xl bg-white cursor-pointer relative flex flex-col items-center ">
          <div class="absolute border-2 border-black w-[60%] rounded-2xl top-3"></div>
          <div class="absolute border-2 border-black w-[60%] rounded-2xl top-5.5"></div>
          <div class="absolute border-2 border-black w-[60%]  rounded-2xl bottom-3"></div>
        </button>
      </div>
      <div
        class="gap-5 flex flex-row flex-nowrap items-center min-w-2/4 justify-between max-md:absolute max-md:-z-10 max-md:flex-col max-md:max-w-[650px] max-md:max-h-dvh max-md:w-[85%] max-md:overflow-auto max-md:hidden max-md:top-12  max-md:p-10 max-md:items-stretch max-md:gap-6 max-md:bg-[#000] max-md:border-3 max-md:border-[#262626] rounded-b-3xl"
        ref="nav">
        <button
          class="nav-btn focus:outline-2 text-white focus:outline-offset-2 focus:outline-white pt-2 pb-2 pl-3 pr-3 cursor-pointer font-bold hover:bg-white hover:text-black rounded-3xl duration-200 ease-in-out">
          About Event
        </button>
        <button
          class="nav-btn focus:outline-2 text-white focus:outline-offset-2 focus:outline-white pt-2 pb-2 pl-3 pr-3 cursor-pointer font-bold hover:bg-white hover:text-black rounded-3xl duration-200 ease-in-out">
          Timeline
        </button>
        <button
          class="nav-btn focus:outline-2 text-white focus:outline-offset-2 focus:outline-white pt-2 pb-2 pl-3 pr-3 cursor-pointer font-bold hover:bg-white hover:text-black rounded-3xl duration-200 ease-in-out">
          Alur Pendaftaran
        </button>
        <button
          class="nav-btn focus:outline-2 text-white focus:outline-offset-2 focus:outline-white pt-2 pb-2 pl-3 pr-3 cursor-pointer font-bold hover:bg-white hover:text-black rounded-3xl duration-200 ease-in-out">
          FAQ
        </button>
        <router-link to="/register">
          <button
            class="px-5 py-2 max-md:w-full cursor-pointer font-semibold bg-white shadow-sm text-black hover:bg-red-100 rounded-xl duration-200 ease-in-out">
            Register
          </button>
        </router-link>
        <router-link to="/work_submition">
          <button
            class="px-5 py-2 max-md:w-full cursor-pointer font-semibold bg-red-700 text-white shadow-sm hover:text-black hover:bg-red-100 rounded-xl duration-200 ease-in-out">
            Submit
          </button>
        </router-link>

      </div>
    </div>
  </nav>
</template>
