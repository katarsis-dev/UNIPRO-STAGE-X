<script setup>
import { onMounted, useTemplateRef } from 'vue';
const input = useTemplateRef("form_register")
onMounted(() => {
    const input_register = Array.from(input.value.elements).map(data => {
        if (data.tagName == "INPUT" | data.tagName != "BUTTON"){
            return data
        }
    })
    
    console.log(input_register);
    input_register.map(data => {
        console.log(data);
        
    })
    
});
</script>


<template>
    <div class=" w-full h-full flex justify-center items-center">
        <div class="w-[95%] h-[95%] flex">
            <div class="bg-[#e4e4e4] h-full w-[50%] flex items-start justify-center ">
                <div class="w-full h-full px-10 py-20 flex flex-col justify-center items-start ">
                    <h1 class="text-[#D73F3F] font-bold text-4xl">REGISTER</h1>

                    <form action="" class="mt-2 border-black flex flex-col gap-8 justify-center" ref="form_register">

                        <!--Input nama tim-->
                        <div class="flex flex-col w-[70%]">
                            <label for="nama_tim" class="text-md font-semibold text-black">Nama Tim</label>
                            <input type="text" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan Nama Tim" name="nama_tim" required>
                        </div>

                        <!--Input email-->
                        <div class="flex flex-col w-[70%]">
                            <label for="email" class="text-md font-semibold text-black">Email</label>
                            <input type="email" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan E-mail Perwakilan Tim" name="email" required>
                        </div>

                        <!--Input nomor kontak perwakilan tim-->
                        <div class="flex flex-col w-[70%]">
                            <label for="nomor_wa" class="text-md font-semibold text-black">Nomor Whats-App</label>
                            <input type="number" class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan Nomor Perwakilan Tim" name="nomor_wa" required>
                        </div>

                        <!--Input nomor Anggota Tim-->
                        <div class="flex gap-5 w-[70%] flex-wrap border ">
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
                        <div class="flex flex-col w-[70%]">
                            <label for="" class="text-md font-semibold text-black">Asal Sekolah : </label>
                            <input type="text"
                                class="border-b-2 border-red-500 rounded-sm p-2  text-black" placeholder="Asal Sekolah" required>
                        </div>
                        <div class="flex flex-col w-[70%]">
                            <label for="" class="text-md font-semibold text-black">Bukti Pembayaran : </label>
                            <input type="file"
                                class="cursor-pointer border-b-2 border-red-500 rounded-sm p-2  text-black" required>
                        </div>
                        <button
                            class="submit bg-red-800 w-[70%] text-white cursor-pointer py-2 px-10 rounded-2xl font-semibold">Submit</button>

                    </form>

                    <router-link to="/">
                        <button class="mt-5 py-2 px-10  bg-black rounded-2xl font-semibold cursor-pointer">
                            Kembali
                        </button>
                    </router-link>

                </div>
            </div>



            <div class="bg-[#962020] relative  w-[50%] flex items-center justify-center">
                <div
                    class="bg-[url(../src/assets/hero-1.jpg)] bg-center bg-cover bg-no-repeat absolute opacity-40 grayscale-50 w-full h-full z-5">
                </div>
                <div
                    class="bg-gradient-to-b from-red-600 via-red-900 to-black bg-center bg-cover bg-no-repeat absolute opacity-75 grayscale-50 w-full h-full z-6">
                </div>
                <div class="relative z-10">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
        </div>
    </div>

</template>