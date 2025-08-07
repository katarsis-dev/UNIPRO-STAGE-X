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
    <!--Container-->
    <div id="timeline-section" class="w-full text-center pt-10 pb-10 flex justify-center items-center  bg-[#0c0c0d]">
        <!--Container-content-->
        <div class="  w-[90%] flex flex-col justify-center gap-5">
            <h1 class="text-4xl text-center font-black tracking-wide text-shadow-md text-shadow-black/100 text-white">
                TIMELINE</h1>
            <!--Timeline-Content-->
            <div class="relative flex justify-center items-center ">
                <!--Card-Container-->
                <div
                    class="w-full  timeline-area pl-5 pr-5 rounded-2xl shadow-[30px_0px_60px_-12px_rgb(239_68_68/0.12)_inset,-30px_0px_60px_-12px_rgb(239_68_68/0.12)_inset] flex  justify-start gap-6 pt-10 pb-10 relative z-3 overflow-auto">

                    <!--Card-1-->
                    <div
                        class=" text-white group max-sm:min-w-full hover:bg-[#ef4444] hover:-translate-y-1 transition duration-600 flex flex-col gap-4 items-center justify-start max-md:justify-center min-w-4/12 max-h-96 border-5 border-[#464646] bg-[rgba(29,29,29,0.8)] p-5 shadow-[0px_6px_12px_-2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] hover:shadow-[0px_6px_12px_-2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(0_0_0/0.3)] rounded-2xl cursor-pointer">
                        <div
                            class=" group-hover:bg-black group-hover:text-white transition duration-600 p-2 shadow-[2px_2px_2px_2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] bg-[#922121]  text-center rounded-2xl w-full ">
                            <h5 class="font-black text-xl max-md:text-lg">Pendaftaran Peserta</h5>
                        </div>
                        <div class="text-center font-bold max-md:gap-2 max-md:mt-2 flex flex-col">
                            <p class="text-sm max-md:text-xs">Gelombang I : 29 Juli – 2 September 2025</p>
                            <p class="text-sm max-md:text-xs">Gelombang II : 3 September – 30 Oktober 2025</p>
                        </div>
                    </div>

                    <!--Card-2-->
                    <div
                        class="text-white group max-sm:min-w-full hover:bg-[#ef4444] hover:-translate-y-1 transition duration-600 flex flex-col gap-4 items-center justify-start max-md:justify-center min-w-4/12 max-h-96 border-5 border-[#464646] bg-[rgba(29,29,29,0.8)] p-5 shadow-[0px_6px_12px_-2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] hover:shadow-[0px_6px_12px_-2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(0_0_0/0.3)] rounded-2xl cursor-pointer">

                        <div
                            class=" group-hover:bg-black group-hover:text-white transition duration-600 p-2 shadow-[2px_2px_2px_2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] bg-[#922121]  text-center rounded-2xl w-full ">

                            <h5 class="font-black text-lg max-md:text-sm">Pengumpulan Karya &
                                Pengumuman
                                Finalis</h5>
                        </div>
                        <p class="text-sm max-md:text-xs font-bold">1 November 2025</p>
                    </div>

                    <!--Card-4-->
                    <div
                        class="text-white group max-sm:min-w-full hover:bg-[#ef4444] hover:-translate-y-1 transition duration-600 flex flex-col gap-4 items-center justify-start max-md:justify-center min-w-4/12 max-h-96 border-5 border-[#464646] bg-[rgba(29,29,29,0.8)] p-5 shadow-[0px_6px_12px_-2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] hover:shadow-[0px_6px_12px_-2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(0_0_0/0.3)] rounded-2xl cursor-pointer">

                        <div
                            class=" group-hover:bg-black group-hover:text-white transition duration-600 p-2 shadow-[2px_2px_2px_2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] bg-[#922121]  text-center rounded-2xl w-full ">

                            <h5 class="font-black text-xl max-md:text-sm ">Technical Meeting</h5>
                        </div>
                        <p class="text-sm max-md:text-xs font-bold ">13 November 2025</p>
                    </div>

                    <!--Card-5-->
                    <div
                        class="text-white group max-sm:min-w-full hover:bg-[#ef4444] hover:-translate-y-1 transition duration-600 flex flex-col gap-4 items-center justify-start max-md:justify-center min-w-4/12 max-h-96 border-5 border-[#464646] bg-[rgba(29,29,29,0.8)] p-5 shadow-[0px_6px_12px_-2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] hover:shadow-[0px_6px_12px_-2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(0_0_0/0.3)] rounded-2xl cursor-pointer">
                        <div
                            class=" group-hover:bg-black group-hover:text-white transition duration-600 p-2 shadow-[2px_2px_2px_2px_rgb(0_0_0/0.25),0px_3px_7px_-3px_rgb(239_68_68/0.3)] bg-[#922121]  text-center rounded-2xl w-full ">

                            <h5 class="font-black text-xl max-md:text-sm">Final</h5>
                        </div>
                        <p class="text-sm max-md:text-xs font-bold">22 November 2025</p>
                    </div>

                </div>
                <!--Card-Container-->
            </div>
            <!--Timeline-Content-->
        </div>
        <!--Container-Content-->
    </div>
    <!--Container-->

</template>