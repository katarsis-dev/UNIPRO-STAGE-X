<script setup>

import heroImage1 from "@/public/assets/hero-1.webp"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".started_text",({
        scrollTrigger : {
            trigger: ".started_content",
            start: "top 80%",
            toggleActions: "play reverse play reset"
        },
        opacity: 0,
        duration: 1
    }))


    gsap.from(".started_button", ({
        scrollTrigger: {
            trigger: ".started_content",
            start: "top 80%",
            toggleActions: "play reverse play reset"
        },
        opacity: 0,
        duration: 1
    }))
    
});


</script>

<template>
    <div id="get_started_section" class="text-white relative w-full h-dvh  flex justify-center items-center ">
        <div :style="{'backgroundImage' : `url(${heroImage1})`}"
            class="bg-center bg-cover bg-no-repeat absolute opacity-40 grayscale-50 w-full h-full z-5">
        </div>
        <div
            class="bg-gradient-to-b from-red-600 via-red-900 to-black bg-center bg-cover bg-no-repeat absolute opacity-75 grayscale-50 w-full h-full z-6">
        </div>

        <div
            class="started_content relative z-7 container w-[90%] flex flex-col justify-center items-center gap-5 text-center">
            <h2 class="started_text font-black text-4xl">🚀 Show Your Skill, Push the Limit!</h2>
            <div
                class="started_button flex flex-wrap justify-center  gap-10 max-[390px]:flex-col max-[390px]:mt-5 max-[390px]:gap-5">
                <router-link to="/register">
                    <button
                        class="p-3 px-10 bg-white max-[390px]:w-full text-red-700 font-semibold rounded-xl shadow hover:bg-red-100 hover:text-red-800 transition duration-300 cursor-pointer">Register
                        Competition</button>
                </router-link>
                <router-link to="/work_submition">
                    <button
                        class="p-3 px-10 bg-red-700 text-white max-[390px]:w-full font-semibold rounded-xl shadow hover:bg-red-800 transition duration-300 cursor-pointer">Submit
                        Your
                        Work</button>
                </router-link>
                <a href="https://drive.google.com/file/d/1enalPdEpzJaTopDkvLqb9eqJCG2xXcxE/view" target="_blank">
                    <button
                        class="p-3 px-10 bg-red-700 text-white max-[390px]:w-full font-semibold rounded-xl shadow hover:bg-red-800 transition duration-300 cursor-pointer">
                        Guidebook Lomba</button>
                </a>
            </div>
        </div>

    </div>
</template>
