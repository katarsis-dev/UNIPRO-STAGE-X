<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const faq_btn = document.getElementsByClassName("faq-btn")
    const faq_desc = document.getElementsByClassName("faq_desc")
    let arr_btn = []
    let faq_content = []
    for (let index = 0; index < faq_btn.length; index++) {
        arr_btn.push(faq_btn[index])
        faq_content.push(faq_desc[index])
    }
    arr_btn.forEach((data,i) => {
        data.addEventListener("click", (e) => {
            if (faq_content[i].classList.contains("hidden")){
                faq_content[i].classList.remove("hidden")
                faq_content[i].classList.add("opacity-0")
                requestAnimationFrame(() => {
                    faq_content[i].classList.add("opacity-100")
                })
            } else {
                faq_content[i].classList.add("hidden")
                requestAnimationFrame(() => {
                    faq_content[i].classList.remove("opacity-0")
                },{
                    once:true
                })
            }
        })
    })
    
    
});
</script>

<template>
    <div class="w-full pb-10 pt-10 flex justify-center items-center">
        <div class="flex justify-center items-center container max-w-[1440px] flex-col gap-10">
            <h3 class="font-black text-4xl">Frequently Asked Question</h3>
            <div class="w-4/5 flex flex-col justify-center items-center gap-5">

                <div class="w-full flex flex-col items-center shadow-[0px_8px_24px_rgb(239_68_68/0.2)] rounded-2xl">
                    <div class="p-7 w-full flex justify-between items-center bg-[#000] ">
                        <h5 class="font-bold">Apa itu UNIPRO?</h5>
                        <button class="p-3 bg-[#be3232] rounded-2xl cursor-pointer faq-btn"></button>
                    </div>
                    <div class="p-5 bg-black rounded-b-2xl w-full faq_desc transition-opacity duration-700 ease-in-out">
                        <p>UNIPRO adalah kompetisi tahunan yang digelar oleh <b>Himpunan Mahasiswa Sistem Informasi
                                UNIKAMA</b> sebuah web development tingkat nasional yang ditujukan untuk siswa/siswi
                            SMA, SMK, atau sederajat di seluruh Indonesia. ditahun ini UNIPRO sudah pada periode STAGE
                            IX yang dimana menggelarkan kompetisi web development bertemakan Innovative Clinics:
                            Blending Creativity and Technology for Quality Healthcare.</p>
                    </div>
                </div>
                <div class="w-full flex flex-col items-center shadow-[0px_8px_24px_rgb(239_68_68/0.2)] rounded-2xl">
                    <div class="p-7 w-full flex justify-between items-center bg-black ">
                        <h5 class="font-bold">Siapa saja yang boleh ikut lomba ini?</h5>
                        <button class="p-3 bg-[#be3232] rounded-2xl cursor-pointer faq-btn"></button>
                    </div>
                    <div
                        class="p-5 bg-[#000] rounded-b-2xl w-full  faq_desc transition-opacity duration-700 ease-in-out">
                        <p>Siswa/i aktif dari SMA, SMK, atau sederajat di seluruh Indonesia, baik dari jurusan IT maupun
                            non-IT, selama memiliki ketertarikan dan kemampuan di bidang web development.</p>
                    </div>
                </div>
                <div class="w-full flex flex-col items-center shadow-[0px_8px_24px_rgb(239_68_68/0.2)] rounded-2xl">
                    <div class="p-7 w-full flex justify-between items-center bg-black ">
                        <h5 class="font-bold">Apakah lomba ini dilakukan secara online atau offline?</h5>
                        <button class="p-3 bg-[#be3232] rounded-2xl cursor-pointer faq-btn"></button>
                    </div>
                    <div
                        class="p-5 bg-[#000] rounded-b-2xl w-full  faq_desc transition-opacity duration-700 ease-in-out">
                        <p>Mulai dari proses pendaftaran, pengumpulan karya (seleksi),akan
                            diselenggarakan secara online,dan untuk Final akan diselenggarakan Offline di <b>Aula
                                Sarwakirti Universitas PGRI Kanjuruham Malang</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>