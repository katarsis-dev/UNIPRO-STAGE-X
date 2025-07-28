<script setup>
import { onMounted } from 'vue';

onMounted(() => {

    const timeline_area = document.getElementsByClassName("timeline-area")[0]

    timeline_area.addEventListener("wheel", (e) => {
        e.preventDefault()
        timeline_area.scrollBy({
            left: e.deltaY < 0 ? -30 : 30
        })

    })
});


</script>

<template>

    <div class="w-full pt-10 pb-10 flex justify-center items-center  bg-[#0c0c0d]">
        <div class=" container w-[90%] flex flex-col justify-center gap-5">
            <h1 class="text-6xl font-black tracking-wide text-shadow-md text-shadow-black/100">TIMELINE</h1>
            <div class="relative flex justify-center items-center ">
                <div class="border absolute w-3/4 z-2"></div>
                <div
                    class="w-full timeline-area pl-5 pr-5 rounded-2xl shadow-[30px_0px_60px_-12px_rgb(239_68_68/0.12)_inset,-30px_0px_60px_-12px_rgb(239_68_68/0.12)_inset] flex  justify-start gap-6 pt-10 pb-10 relative z-3 overflow-auto">

                    <div
                        class=" flex flex-col justify-center min-w-3/12 max-w-3/12 bg-black p-5 shadow-[0px_6px_12px_-2px_rgb(239_68_68/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] rounded-2xl cursor-pointer transition duration-600 hover:bg-[#ef4444] hover:-translate-y-1">
                        <div class="">
                            <h5 class="font-black text-xl">Pendaftaran Peserta</h5>
                        </div>
                        <div>
                            <p class="text-sm">Gelombang I : 29 Juli – 2 September 2025</p>
                            <p class="text-sm">Gelombang II : 3 September – 30 Oktober 2025</p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center min-w-3/12  max-w-3/12 bg-black p-5 shadow-[0px_6px_12px_-2px_rgb(239_68_68/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] rounded-2xl cursor-pointer transition duration-600 hover:bg-[#ef4444] hover:-translate-y-1">
                        <div class="">
                            <h5 class="font-black text-xl">Pengumpulan Karya</h5>
                        </div>
                        <p class="text-sm">1 November 2025</p>
                    </div>
                    <div
                        class="flex flex-col justify-center min-w-3/12  max-w-3/12  bg-black p-5 shadow-[0px_6px_12px_-2px_rgb(239_68_68/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] rounded-2xl cursor-pointer transition duration-600 hover:bg-[#ef4444] hover:-translate-y-1">
                        <div class="">
                            <h5 class="font-black text-xl">Pengumuman Finalis</h5>
                        </div>
                        <p class="text-sm">1 November 2025</p>
                    </div>
                    <div
                        class="flex flex-col justify-center min-w-3/12  max-w-3/12  bg-black p-5 shadow-[0px_6px_12px_-2px_rgb(239_68_68/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] rounded-2xl cursor-pointer transition duration-600 hover:bg-[#ef4444] hover:-translate-y-1">
                        <div class="">
                            <h5 class="font-black text-xl">Technical Meeting</h5>
                        </div>
                        <p class="text-sm">13 November 2025</p>
                    </div>
                    <div
                        class="flex flex-col justify-center min-w-3/12  max-w-3/12  bg-black p-5 shadow-[0px_6px_12px_-2px_rgb(239_68_68/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] rounded-2xl cursor-pointer transition duration-600 hover:bg-[#ef4444] hover:-translate-y-1">
                        <div class="">
                            <h5 class="font-black text-xl">Final</h5>
                        </div>
                        <p class="text-sm">22 November 2025</p>
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>