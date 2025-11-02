<script setup>
import gsap from 'gsap';
import { onBeforeMount, onMounted, useTemplateRef, ref, reactive } from 'vue';
import { supabase } from '../lib/supabaseClient';
import heroImage1 from "@/public/assets/hero-1.webp"
import logo from "@/public/assets/logo.webp"

const input = useTemplateRef("form_register")

const uploaded_file = ref("")
const input_repository = useTemplateRef("input_repository")
const input_file = useTemplateRef("input_file")
const data_form = reactive({
    team_name: "",
})

const fileHandler = (e) => {
    if (e.target.files.length != 0) {
        if (e.target.files[0].size > 50000000) {
            uploaded_file.value = ""
            e.target.value = ""
            alert("Proses Upload File Submission Gagal!,pastikan ukuran file foto dibawah 50MB!")
            return;
        }
        uploaded_file.value = e.target.files[0];
        input_repository.value.required = false
        return;
    }
    input_repository.value.required = true
}
const repoHandler = (e) => {
    if (data_form.repo_link.trim().length != 0) {
        input_file.value.required = false
        return;
    }
    input_file.value.required = true
}


async function onSubmit(e) {
    const nameFile = `submission-${data_form.team_name}-${Date.now()}`
    let statusUpload = false
    if(uploaded_file.value){
        const { error: uploadedError } = await supabase.storage.from("file_submission").upload(nameFile, uploaded_file.value)
        statusUpload = true
    }

    const { data } = statusUpload ? await supabase.storage.from("file_submission").getPublicUrl(nameFile) : ""

    const { error } = await supabase.rpc('handle_submission', {
        team_name_input: data_form.team_name,
        link_repo_input: input_repository.value.value,
        link_file_input: statusUpload ? data.publicUrl : null
    })


    if (error) {
        if(error.message.includes("duplicate")){
            alert('Gagal submit: Anda telah melakukan submit sebelumnya, konfirmasi admin jika terjadi kesalahan submit file / link repositori')
        } else {
            alert('Gagal submit: '+error.message)

        }
    } else {
        alert('Submission berhasil!')
    }

}

onMounted(() => {
    const input_register = Array.from(input.value.elements).map(data => {
        if (data.tagName == "INPUT" | data.tagName != "BUTTON") {
            return data
        }
    })

    const tl_form = gsap.timeline()

    tl_form.from("#form_side", ({
        opacity: 0,
        y: -40,
        duration: 0.6,
        ease: "linear"
    }), 0)

    tl_form.from("#form-banner_side", ({
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "linear"
    }), 0)

    tl_form.from("#image_form", ({
        opacity: 0,
        scale: 0,
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
                    <h1 class="text-[#D73F3F] font-bold text-4xl">Submit Website</h1>
                    <form @submit.prevent="onSubmit"
                        class="w-full mt-2 flex flex-col gap-6 justify-center max-md:items-center " ref="form_register">

                        <!--Input nama tim-->
                        <div class="flex flex-col w-[70%] max-md:w-full">
                            <label for="nama_tim" class="text-md font-semibold text-black">Nama Tim</label>
                            <input type="text" v-model="data_form.team_name"
                                class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Masukan Nama Tim" name="nama_tim" required>
                        </div>


                        <div class="flex flex-col w-[70%] max-md:w-full">
                            <label for="" class="text-md font-semibold text-black">Link Repositori Github / GDrive :
                            </label>
                            <input type="text" v-model="data_form.repo_link" ref="input_repository"
                                class="border-b-2 border-red-500 rounded-sm p-2  text-black"
                                placeholder="Link Repositori" @input="repoHandler" required>
                            <p class="text-xs text-black mt-1">Pastikan Repositori Web / Penyimpanan bersifat Publik!
                            </p>
                        </div>
                        <p class="text-black font-black">ATAU</p>
                        <div class="flex flex-col w-[70%] max-md:w-full">
                            <label for="" class="text-md font-semibold text-black">Upload File Web : </label>
                            <input type="file" @change="fileHandler" ref="input_file"
                                accept="application/vnd.rar, .zip, .7z"
                                class="cursor-pointer border-b-2 border-red-500 rounded-sm p-2  text-black" required>
                            <p class="text-xs text-black mt-1">Pastikan Ukuran File Dibawah 50MB dan dengan format
                                .rar!!</p>

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