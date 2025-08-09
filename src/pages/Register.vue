<script setup>
import gsap from 'gsap';
import { onBeforeMount, onMounted, useTemplateRef } from 'vue';



const input = useTemplateRef("form_register")


onMounted(() => {



    const input_register = Array.from(input.value.elements).map(data => {
        if (data.tagName == "INPUT" | data.tagName != "BUTTON"){
            return data
        }
    })
    
    const tl_form = gsap.timeline()

    tl_form.from("#form_side",({
        opacity : 0,
        y:-40,
        duration: 0.6,
        ease: "linear"
    }),0)

    tl_form.from("#form-banner_side", ({
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "linear"
    }),0)

    tl_form.from("#image_form", ({
        opacity: 0,
        scale:0,
        duration: 0.3,
        ease: "linear"
    }))


});
</script>


<template>
    <div class=" w-full h-full flex justify-center items-center relative">
        <div
            class="absolute z-1 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        </div>
        <div class="absolute z-1 top-0 w-full h-full bg-gradient-to-b from-black-500 via-gray-900 to-[#18181B] opacity-30">
        </div>

        <div class="w-[95%] h-[95%] flex  max-md:flex-col-reverse max-md:items-center p-4 relative z-2">
            <div id="form_side"
                class="bg-[#e4e4e4] border h-full w-[50%] flex items-start justify-center max-md:rounded-b-2xl max-md:w-[95%]">
                <div
                    class="w-full h-full px-10 py-20 flex flex-col border justify-center items-start max-md:items-center max-md:gap-5 ">
                    <h1 class="text-[#D73F3F] font-bold text-4xl">REGISTER</h1>

                    <form action="" class="w-full mt-2 flex flex-col gap-8 justify-center max-md:items-center "
                        ref="form_register">

                        <!--Input nama tim-->
                        <div class="flex flex-col w-[70%] max-md:w-full">
                            <label for="nama_tim" class="text-md font-semibold text-black">Nama Tim</label>
                            <input type="text" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan Nama Tim" name="nama_tim" required>
                        </div>

                        <!--Input email-->
                        <div class="flex flex-col w-[70%] max-md:w-full">
                            <label for="email" class="text-md font-semibold text-black">Email</label>
                            <input type="email" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan E-mail Perwakilan Tim" name="email" required>
                        </div>

                        <!--Input nomor kontak perwakilan tim-->
                        <div class="flex flex-col w-[70%] max-md:w-full">
                            <label for="nomor_wa" class="text-md font-semibold text-black">Nomor Whats-App</label>
                            <input type="number" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan Nomor Perwakilan Tim" name="nomor_wa" required>
                        </div>

                        <!--Input nama Anggota Tim-->
                        <div class="flex gap-5 w-[80%] flex-wrap max-md:w-fit">
                            <div class="flex">
                                <div class="flex flex-col">
                                    <label for="" class="text-md font-semibold text-black">Masukan Nama Anggota
                                        1</label>
                                    <input type="text" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                        placeholder="Nama Anggota" name="" required>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex flex-col">
                                    <label for="" class="text-md font-semibold text-black">Masukan Nama Anggota
                                        2</label>
                                    <input type="text" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                        placeholder="Nama Anggota">
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex flex-col">
                                    <label for="" class="text-md font-semibold text-black">Masukan Nama Anggota
                                        3</label>
                                    <input type="text" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                        placeholder="Nama Anggota">
                                </div>
                            </div>
                        </div>

                        <!--Input Bukti Pembayaran-->
                        <div class="flex flex-col w-[70%] max-md:w-full">
                            <label for="" class="text-md font-semibold text-black">Asal Sekolah : </label>
                            <input type="text" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Asal Sekolah" required>
                        </div>
                        <div class="flex flex-col w-[70%] max-md:w-full">
                            <label for="" class="text-md font-semibold text-black">Bukti Pembayaran : </label>
                            <input type="file"
                                class="cursor-pointer border-b-2 border-red-500 rounded-sm p-2  text-black" required>
                        </div>
                        <button
                            class="submit bg-red-800 w-[70%] max-md:w-full text-white cursor-pointer py-2 px-10 rounded-2xl font-semibold">Submit</button>

                    </form>

                    <router-link to="/" class="w-full">
                        <button
                            class="mt-5 py-2 px-10  bg-black rounded-2xl font-semibold cursor-pointer max-md:w-full">
                            Kembali
                        </button>
                    </router-link>

                </div>
            </div>



            <div id="form-banner_side"
                class="bg-[#962020] relative  w-[50%] flex items-center justify-center max-md:rounded-t-2xl max-md:w-[95%]">
                <div
                    class="max-md:rounded-t-2xl bg-[url(../src/assets/hero-1.jpg)] bg-center bg-cover bg-no-repeat absolute opacity-40 grayscale-50 w-full h-full z-5">
                </div>
                <div
                    class="max-md:rounded-t-2xl bg-gradient-to-b from-red-600 via-red-900 to-black bg-center bg-cover bg-no-repeat absolute opacity-75 grayscale-50 w-full h-full z-6">
                </div>
                <div id="image_form" class="max-md:rounded-t-2xl relative z-10">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
        </div>
    </div>

</template>