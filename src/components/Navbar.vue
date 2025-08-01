<script setup>
import { onMounted, useTemplateRef } from 'vue';


const navigation = useTemplateRef("nav");
onMounted(() => {
  

  window.addEventListener("resize", () => {
    if(window.innerWidth <= 768){
      navigation.value.classList.remove("flex")
      navigation.value.classList.add("hidden")
    } else if (window.innerWidth > 768){
      navigation.value.classList.remove("hidden")
      navigation.value.classList.add("flex")
    }
  })
});

</script>

<template>
  <nav class="w-full flex items-center justify-center align-middle relative">
    <div
      class=" w-[90%] inset-shadow-2xs  border-4 border-t-0 border-[#262626] fixed top-0 m-0 z-50 flex flex-nowrap justify-between shadow-black shadow-2xl rounded-b-3xl pl-4 pr-4 bg-black content-center min-w-[750px]">
      <router-link to="/">
        <img src="../assets/logo.png" alt="" class="w-[100px] cursor-pointer">
      </router-link>
      <div class="flex flex-row flex-nowrap items-center min-w-2/4 justify-between" ref="nav">
        <button
          class="focus:outline-2 text-white focus:outline-offset-2 focus:outline-white pt-2 pb-2 pl-3 pr-3 cursor-pointer font-bold hover:bg-white hover:text-black rounded-3xl duration-200 ease-in-out">
          About Event
        </button>
        <button
          class="focus:outline-2 text-white focus:outline-offset-2 focus:outline-white pt-2 pb-2 pl-3 pr-3 cursor-pointer font-bold hover:bg-white hover:text-black rounded-3xl duration-200 ease-in-out">
          Timeline
        </button>
        <button
          class="focus:outline-2 text-white focus:outline-offset-2 focus:outline-white pt-2 pb-2 pl-3 pr-3 cursor-pointer font-bold hover:bg-white hover:text-black rounded-3xl duration-200 ease-in-out">
          Alur Pendaftaran
        </button>
        <button
          class="focus:outline-2 text-white focus:outline-offset-2 focus:outline-white pt-2 pb-2 pl-3 pr-3 cursor-pointer font-bold hover:bg-white hover:text-black rounded-3xl duration-200 ease-in-out">
          FAQ
        </button>

      </div>
      <div class="flex items-center">
        <router-link to="/register">
          <button
            class="px-5 py-2 cursor-pointer font-semibold bg-white shadow-sm text-black hover:bg-red-100 rounded-xl duration-200 ease-in-out">
            Register
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>
