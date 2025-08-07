<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const faq_btn = document.getElementsByClassName("faq-btn");
    const faq_desc = document.getElementsByClassName("faq_desc");
    let arr_btn = [];
    let faq_content = [];
    for (let index = 0; index < faq_btn.length; index++) {
        arr_btn.push(faq_btn[index]);
        faq_content.push(faq_desc[index]);
    }
    arr_btn.forEach((data, i) => {
        faq_content[i].classList.add("hidden");
        faq_content[i].classList.add("opacity-0");
        data.addEventListener("click", (e) => {
            if (faq_content[i].classList.contains("hidden")) {
                faq_content[i].classList.remove("hidden");
                requestAnimationFrame(() => {
                    faq_content[i].classList.remove("opacity-0");
                    faq_content[i].classList.add("opacity-100");
                });
            } else {
                faq_content[i].classList.add("hidden");
                requestAnimationFrame(
                    () => {
                        faq_content[i].classList.add("opacity-0");
                        faq_content[i].classList.remove("opacity-100");
                    },
                    {
                        once: true,
                    }
                );
            }
        });
    });
});
</script>

<template>
    <div id="faq_section" class="w-full pb-30 pt-10 flex justify-center items-center relative">
        <div
            class="absolute z-2 inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        </div>

        <div class="flex justify-center items-center container max-w-[1440px] flex-col gap-10 relative z-3">
            <h3 class="font-black text-4xl text-white">Frequently Asked Question</h3>
            <div class="w-4/5 flex flex-col justify-center items-center gap-5">
                <div
                    class="text-white w-full flex flex-col items-center shadow-[0px_8px_24px_rgb(239_68_68/0.2)] rounded-2xl">
                    <div class="p-7 w-full flex justify-between items-center bg-[#000]">
                        <h5 class="font-bold">Apa itu UNIPRO?</h5>
                        <button class="p-3 bg-[#be3232] rounded-2xl cursor-pointer faq-btn"></button>
                    </div>
                    <div class="p-5 bg-black rounded-b-2xl w-full faq_desc transition-opacity duration-700 ease-in-out">
                        <p>
                            UNIPRO adalah kompetisi tahunan yang digelar oleh
                            <b>Himpunan Mahasiswa Sistem Informasi UNIKAMA</b> sebuah web
                            development tingkat nasional yang ditujukan untuk siswa/siswi SMA,
                            SMK, atau sederajat di seluruh Indonesia. ditahun ini UNIPRO sudah
                            pada periode STAGE IX yang dimana menggelarkan kompetisi web
                            development bertemakan Innovative Clinics: Blending Creativity and
                            Technology for Quality Healthcare.
                        </p>
                    </div>
                </div>
                <div
                    class="text-white w-full flex flex-col items-center shadow-[0px_8px_24px_rgb(239_68_68/0.2)] rounded-2xl">
                    <div class="p-7 w-full flex justify-between items-center bg-black">
                        <h5 class="font-bold">Siapa saja yang boleh ikut lomba ini?</h5>
                        <button class="p-3 bg-[#be3232] rounded-2xl cursor-pointer faq-btn"></button>
                    </div>
                    <div
                        class="p-5 bg-[#000] rounded-b-2xl w-full faq_desc transition-opacity duration-700 ease-in-out">
                        <p>
                            Siswa/i aktif dari SMA, SMK, atau sederajat di seluruh Indonesia,
                            baik dari jurusan IT maupun non-IT, selama memiliki ketertarikan
                            dan kemampuan di bidang web development.
                        </p>
                    </div>
                </div>
                <div
                    class="text-white w-full flex flex-col items-center shadow-[0px_8px_24px_rgb(239_68_68/0.2)] rounded-2xl">
                    <div class="p-7 w-full flex justify-between items-center bg-black">
                        <h5 class="font-bold">
                            Apakah lomba ini dilakukan secara online atau offline?
                        </h5>
                        <button class="p-3 bg-[#be3232] rounded-2xl cursor-pointer faq-btn"></button>
                    </div>
                    <div
                        class="p-5 bg-[#000] rounded-b-2xl w-full faq_desc transition-opacity duration-700 ease-in-out">
                        <p>
                            Mulai dari proses pendaftaran, pengumpulan karya (seleksi),akan
                            diselenggarakan secara online,dan untuk Final akan diselenggarakan
                            Offline di
                            <b>Aula Sarwakirti Universitas PGRI Kanjuruham Malang</b>
                        </p>
                    </div>
                </div>
                <div
                    class="text-white w-full flex flex-col items-center shadow-[0px_8px_24px_rgb(239_68_68/0.2)] rounded-2xl">
                    <div class="p-7 w-full flex justify-between items-center bg-black">
                        <h5 class="font-bold">
                            Apakah setiap sekolah boleh mendaftarkan lebih dari satu tim?
                        </h5>
                        <button class="p-3 bg-[#be3232] rounded-2xl cursor-pointer faq-btn"></button>
                    </div>
                    <div
                        class="p-5 bg-[#000] rounded-b-2xl w-full faq_desc transition-opacity duration-700 ease-in-out">
                        <p>
                            Boleh,Setiap sekolah diperbolehkan untuk mendaftarkan lebih dari
                            satu tim
                            <b>(Setiap sekolah yang mendaftarkan lebih dari satu tim (Minimal
                                2 tim) dapat potongan sebesar Rp. 5000 setiap gelombang).
                            </b>
                        </p>
                    </div>
                </div>
                <div
                    class="text-white w-full flex flex-col items-center shadow-[0px_8px_24px_rgb(239_68_68/0.2)] rounded-2xl">
                    <div class="p-7 w-full flex justify-between items-center bg-black">
                        <h5 class="font-bold">Berapa biaya pendaftaran lomba ?</h5>
                        <button class="p-3 bg-[#be3232] rounded-2xl cursor-pointer faq-btn"></button>
                    </div>
                    <div
                        class="p-5 bg-[#000] rounded-b-2xl w-full faq_desc transition-opacity duration-700 ease-in-out">
                        <p>
                            Biaya pendaftaran sesuai ketentuan panitia dan ditransfer ke
                            rekening BRI 7867 0101 6560 530 atas nama <b>Nabilatul Hikmah.</b>
                        </p>
                    </div>
                </div>
                <div
                    class="text-white w-full flex flex-col items-center shadow-[0px_8px_24px_rgb(239_68_68/0.2)] rounded-2xl">
                    <div class="p-7 w-full flex justify-between items-center bg-black">
                        <h5 class="font-bold">Dimana Lokasi Final ?</h5>
                        <button class="p-3 bg-[#be3232] rounded-2xl cursor-pointer faq-btn"></button>
                    </div>
                    <div
                        class="p-5 bg-[#000] rounded-b-2xl w-full faq_desc transition-opacity duration-700 ease-in-out">
                        <p><b>Aula Sarwakirti UNIVERSITAS PGRI KANJURUHAN MALANG</b></p>
                        <div class="mt-2">
                            <iframe class="w-full h-72 rounded-2xl"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.92445386365!2d112.61815197213537!3d-8.006727792019293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd627fa6be942bd%3A0x82c14e295cc88076!2sAula%20SARWAKIRTI%20-%20UNIKAMA!5e0!3m2!1sid!2sid!4v1753924420282!5m2!1sid!2sid"
                                allowfullscreen="true" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
