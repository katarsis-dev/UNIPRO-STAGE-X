<template>
    <div id="get_started_section" class="text-white relative w-full h-[400px] flex justify-center items-center ">
        <div
            class="bg-[url(../src/assets/hero-1.jpg)] bg-center bg-cover bg-no-repeat absolute opacity-40 grayscale-50 w-full h-full z-5">
        </div>
        <div
            class="bg-gradient-to-b from-red-600 via-red-900 to-black bg-center bg-cover bg-no-repeat absolute opacity-75 grayscale-50 w-full h-full z-6">
        </div>

        <div class="relative z-7 container w-[90%] flex flex-col justify-center items-center gap-5 text-center">
            <h2 class="font-black text-4xl">🚀 Show Your Skill, Push the Limit!</h2>
            <p>Its better register now than center-ing ur div buddy!</p>
            <div class="flex gap-10">
                <router-link to="/register">
                    <button
                        class="p-3 px-10 bg-white text-red-700 font-semibold rounded-xl shadow hover:bg-red-100 hover:text-red-800 transition duration-300 cursor-pointer">Register
                        Competition</button>
                </router-link>
                <router-link to="/work_submition">
                    <button
                        class="p-3 px-10 bg-red-700 text-white font-semibold rounded-xl shadow hover:bg-red-800 transition duration-300 cursor-pointer">Submit
                        Your
                        Work</button>
                </router-link>
            </div>
        </div>

    </div>
</template>
