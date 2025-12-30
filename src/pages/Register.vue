<script setup>
import gsap from 'gsap';
import { ref, onMounted, useTemplateRef, reactive } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'vue-router';
import heroImage1 from "@/public/assets/hero-1.webp"
import logo from "@/public/assets/logo.webp"

const router = useRouter();
const isLoading = ref(true); // Biar ga glitch tampil konten dulu baru ketutup

const cekStatusPendaftaran = async () => {
    try {
        // Nanya ke Satpam Supabase: "Masih buka gak?"
        const { data: isOpen, error } = await supabase.rpc('cek_status_event');

        if (error) throw error;

        // Kalau Server bilang FALSE (Tutup)
        if (!isOpen) {
            alert("⚠️ Mohon Maaf, Pendaftaran sudah ditutup per tanggal 3 Januari 2026!");
            router.replace('/'); // Tendang balik ke Home
        } else {
            // Kalau Masih Buka
            isLoading.value = false; // Munculin form
        }

    } catch (err) {
        console.error("Gagal cek waktu:", err.message);
        // Opsi: Kalau error koneksi, mau ditutup atau dibuka? 
        // Default aman: tetep buka dulu biar user ga ngamuk
        isLoading.value = false;
    }
};


const form_area = useTemplateRef("form_register")

const uploaded_file = ref("");

const fileHandler = (ev) => {
    if (ev.target.files[0].size > 2000000) {
        uploaded_file.value = ""
        ev.target.value = ""
        alert("Proses Upload bukti pembayaran gagal!,pastikan ukuran file foto dibawah 2MB!")
        return;
    }
    uploaded_file.value = ev.target.files[0];     
    return;
}

const form_data = reactive({
    nama_tim : "",
    email_tim : "",
    contact_number: "",
    anggota_1: "",
    anggota_2: "",
    anggota_3: "",
    asal_sekolah: "",
})

function formValidation(){
    if (form_data.nama_tim.trim().length == 0 | form_data.anggota_1.trim().length == 0){
        alert("Isi nama dengan benar!")
        return false
    } else if (!form_data.email_tim.includes("@")){
        alert("isi Email dengan format yang benar")
        return false
    } else if (form_data.contact_number.trim().match(/[0-9]/g) == null){
        alert("isi nomor telepon dengan format yang benar")
        return false
    } else if (form_data.asal_sekolah.trim().length == 0){
        alert("isi asal sekolah anda dengan benar!")
        return false
    }
    return true 
}


async function submitForm() {
    if(!formValidation()){
        return;
    } 

    try{
        
        const nameFile = `bukti_pembayaran-${form_data.nama_tim}-${Date.now()}`
        
        const {error:uploadedError} = await supabase.storage.from("bukti_pembayaran").upload(nameFile,uploaded_file.value)

        let member = [form_data.anggota_1, form_data.anggota_2, form_data.anggota_3]

        
        const {data} = await supabase.storage.from("bukti_pembayaran").getPublicUrl(nameFile)
        
        const { error:insertError } = await supabase.from("participants").insert({
            team_name: form_data.nama_tim,
            members: member.filter(data => data.trim().length != 0),
            email: form_data.email_tim,
            school_name: form_data.asal_sekolah,
            contact_number: form_data.contact_number,
            payment_photo : data.publicUrl,
        })
        if (insertError) {
            throw insertError;
        } else if (uploadedError) {
            throw uploadedError;
        } else {
            alert("Pendaftaran Berhasil,tunggu konfirmasi Pembayaran Email,jika dalam 1x24 jam,anda belum mendapatkan konfirmasi, hubungi kami lewat Kontak yang ada,sertakan bukti pembayaran dan kelengkapan lainnya")
        }
        
    } catch(error){
        alert(error.message)
    }
}

onMounted(() => {
    cekStatusPendaftaran();

    const input_register = Array.from(form_area.value.elements).map(data => {
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
        <div
            class="absolute z-1 top-0 w-full h-full bg-gradient-to-b from-black-500 via-gray-900 to-[#18181B] opacity-30">
        </div>

        <div class="w-[95%] h-[95%] flex  max-md:flex-col-reverse max-md:items-center p-4 relative z-2">
            <div id="form_side"
                class="bg-[#e4e4e4] border h-full w-[50%] flex items-start justify-center max-md:rounded-b-2xl max-md:w-[95%]">
                <div
                    class="w-full h-full px-10 py-20 flex flex-col border justify-center items-start max-md:items-center max-md:gap-5 ">
                    <h1 class="text-[#D73F3F] font-bold text-4xl">REGISTER</h1>

                    <form action="" class="w-full mt-2 flex flex-col gap-4 justify-center max-md:items-center "
                        ref="form_register" @submit.prevent="submitForm">

                        <!--Input nama tim-->
                        <div class="flex flex-col w-[85%] max-md:w-full">
                            <label for="nama_tim" class="text-md font-semibold text-black">Nama Tim</label>
                            <input type="text" v-model="form_data.nama_tim"
                                class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan Nama Tim" name="nama_tim" required>

                        </div>

                        <!--Input email-->
                        <div class="flex flex-col w-[85%] max-md:w-full">
                            <label for="email" class="text-md font-semibold text-black">Email</label>
                            <input type="email" v-model="form_data.email_tim"
                                class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan E-mail Perwakilan Tim" name="email" required>
                        </div>

                        <!--Input nomor kontak perwakilan tim-->
                        <div class="flex flex-col w-[85%] max-md:w-full">
                            <label for="nomor_wa" class="text-md font-semibold text-black">Nomor Whats-App</label>
                            <input type="text" v-model="form_data.contact_number"
                                class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan Nomor Perwakilan Tim" name="nomor_wa" required>
                        </div>

                        <!--Input nama Anggota Tim-->
                        <div class="flex gap-5 w-[80%] flex-wrap max-md:w-fit">
                            <div class="flex">
                                <div class="flex flex-col">
                                    <label for="" class="text-md font-semibold text-black">Masukan Nama Anggota
                                        1</label>
                                    <input type="text" ref="anggota-1_input" v-model="form_data.anggota_1"
                                        class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                        placeholder="Nama Anggota" name="" required>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex flex-col">
                                    <label for="" class="text-md font-semibold text-black">Masukan Nama Anggota
                                        2</label>
                                    <input type="text" v-model="form_data.anggota_2"
                                        class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                        placeholder="Nama Anggota">
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex flex-col">
                                    <label for="" class="text-md font-semibold text-black">Masukan Nama Anggota
                                        3</label>
                                    <input type="text" v-model="form_data.anggota_3"
                                        class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                        placeholder="Nama Anggota">
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col w-[85%] max-md:w-full">
                            <label for="" class="text-md font-semibold text-black">Asal Sekolah : </label>
                            <input type="text" v-model="form_data.asal_sekolah"
                                class="border-b-2 border-red-500 rounded-sm p-2  text-black" placeholder="Asal Sekolah"
                                required>
                        </div>

                        <!--Input Bukti Pembayaran-->
                        <div class="flex flex-col w-[70%] max-md:w-full ">
                            <label for="pembayaran_photo" class="text-md font-semibold text-black">Bukti Pembayaran :
                            </label>
                            <input type="file" name="pembayaran_photo" @change="fileHandler"
                                accept="image/jpeg, image/png, image/jpg"
                                class="cursor-pointer border-b-2 rounded-sm p-2 text-black" placeholder="test" required>
                        </div>
                        <button
                            class="submit bg-red-800 w-[60%] max-md:w-full text-white cursor-pointer py-2 px-10 rounded-2xl font-semibold">Submit</button>

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
                <div :style="{ 'backgroundImage': `url(${heroImage1})` }"
                    class="max-md:rounded-t-2xl bg-center bg-cover bg-no-repeat absolute opacity-40 grayscale-50 w-full h-full z-5">
                </div>
                <div
                    class="max-md:rounded-t-2xl bg-gradient-to-b from-red-600 via-red-900 to-black bg-center bg-cover bg-no-repeat absolute opacity-75 grayscale-50 w-full h-full z-6">
                </div>
                <div id="image_form" class="max-md:rounded-t-2xl relative z-10">
                    <img :src="logo" alt="" loading="lazy" decoding="async" fetchpriority="high">
                </div>
            </div>
        </div>
    </div>

</template>