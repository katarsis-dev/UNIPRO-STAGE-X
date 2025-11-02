<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    const skema_container = document.getElementsByClassName("skema_container")[0]
    const skema_card = document.getElementsByClassName("skema_card")
    const tl_skema = gsap.timeline({
        scrollTrigger: {
            trigger: skema_container,
            start: "top 80%",
            toggleActions: "play reset play reset"
        },
    })

    for (let index = 0; index < skema_card.length; index++) {
        tl_skema.from(skema_card[index], ({
            opacity:0,
            duration: 0.5,
            ease:"linear"
        }))        
    }

});

</script>

<template>
        <div id="skema_section" class="w-full relative flex justify-center py-30">
            <div
                class="absolute z-2 top-0 w-full h-full bg-gradient-to-b from-red-500 via-red-900 to-[#18181B] opacity-30">
            </div>
            <div
                class="absolute z-1 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            </div>

            <div class="w-[90%] h-full mt-20 flex flex-col justify-center items-center gap-15 relative z-3">
                <h2
                    class="text-4xl text-center font-black tracking-wide text-shadow-md text-shadow-black/100 text-white">
                    ALUR
                    PENDAFTARAN</h2>
                <div class="skema_container  w-full flex justify-center items-center flex-wrap">
                    <div class="flex gap-8 flex-col w-7/12 max-sm:w-10/12 ">

                        <!--Card-1-->
                        <div
                            class="skema_card p-1.5 bg-[#494949] rounded-xl cursor-pointer shadow-[0px_8px_24px_rgb(0_0_0/0.6)] ">
                            <div
                                class="flex flex-col justify-center items-center p-4 rounded-xl bg-black gap-4 text-white">
                                <div class="rounded-md w-full text-center p-2 bg-[#922121]">
                                    <h3 class="text-xl font-semibold">Pendaftaran Online</h3>
                                </div>
                                <div class="w-full text-center py-2 px-4 bg-[#494949] rounded-md">
                                    <p>Peserta wajib melakukan pendaftaran secara online melalui tautan yang disediakan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!--Card-2-->
                        <div
                            class="skema_card p-1.5  bg-[#494949] rounded-xl cursor-pointer shadow-[0px_8px_24px_rgb(0_0_0/0.6)]">
                            <div
                                class="flex flex-col justify-center items-center p-4 rounded-xl bg-black gap-4 text-white">
                                <div class="rounded-md w-full text-center p-2 bg-[#922121]">
                                    <h3 class="text-xl font-semibold">Pembayaran</h3>
                                </div>
                                <div class="w-full text-center py-2 px-4 bg-[#494949] rounded-md">
                                    <p>Melakukan pembayaran sesuai biaya pendaftaran yang ditentukan panitia melalui
                                        transfer ke rekening BANK BRI 7867 01016560530 atas nama Nabilatul Hikmah.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!--Card-3-->
                        <div
                            class="skema_card p-1.5 bg-[#494949] rounded-xl cursor-pointer shadow-[0px_8px_24px_rgb(0_0_0/0.6)]">
                            <div
                                class="flex flex-col justify-center items-center p-4 rounded-xl bg-black gap-4 text-white">
                                <div class="rounded-md w-full text-center p-2 bg-[#922121]">
                                    <h3 class="text-xl font-semibold">Konfirmasi Pembayaran:</h3>
                                </div>
                                <div class="w-full text-center py-2 px-4 bg-[#494949] rounded-md">
                                    <p>Setelah melakukan pembayaran,tunggu 1x24 jam jika tidak ada konfirmasi via
                                        gmail/whatsapp,
                                        harap melakukan konfirmasi dengan mengirimkan nama tim,dan nama anggota tim
                                        dan menghubungi contact person yang tertera, disertai
                                        bukti transfer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>