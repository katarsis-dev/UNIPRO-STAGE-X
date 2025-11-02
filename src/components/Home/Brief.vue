<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';
import heroImage2 from "@/public/assets/hero-2.webp"

onMounted(() => {
    const brief_component = document.getElementsByClassName("brief")
    const brief_container = document.getElementsByClassName("brief_container")[0]
    gsap.registerPlugin(ScrollTrigger)
    const tl_brief = gsap.timeline({
        scrollTrigger: {
            trigger: brief_container,
            start: "top center",
            toggleActions: "play reverse play reset"
        },
    })

    tl_brief.from(brief_component[0], ({
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "linear"
    }),0)
    .from(brief_component[1], ({
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "linear"
    }))
});
</script>


<template>
    <div id="brief_section" class="w-full py-30 flex relative justify-center items-center overflow-hidden">
        <div class="absolute flex z-5 bg-gradient-to-t from-red-500 via-red-900 to-[#18181B] opacity-10 w-full h-full">
        </div>
        <div
            class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        </div>


        <div class="brief_container w-[90%] flex flex-col justify-center gap-7 text-white relative z-7">
            <div class="brief flex flex-col justify-between max-md:text-center">
                <h1 class="font-black text-4xl tracking-wide">CALLING ALL STUDENTS INNOVATORS </h1>
                <div class="flex justify-between items-center-safe max-md:flex-col max-md:mt-5 max-md:gap-5">
                    <p class="text-sm font-normal text-[#A1A1AA] w-2xl max-md:w-full">UNIPRO STAGE X adalah Event
                        <span class="text-white">Lomba Web Development</span> yang diadakan NASIONAL untuk siswa - siswi
                        SMK/SMA
                        sederajat
                    </p>
                    <button
                        class="cursor-pointer bg-[#B91C1C] pb-3 pt-3 pl-4 pr-4 font-bold rounded-xl max-md:w-full hover:bg-[#991B1B] shadow-[#1b1b1b] shadow-md">
                        <a href="https://linktr.ee/UniproStageX" target="_blank">Learn
                            More</a></button>
                </div>
            </div>

            <div class="brief shadow-lg shadow-black rounded-4xl">
                <img :src="heroImage2" class="w-full h-96 object-cover rounded-4xl grayscale-100 opacity-80" alt=""
                    loading="lazy" decoding="async">
            </div>
        </div>
    </div>
</template>