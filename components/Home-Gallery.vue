<script setup>
import { LazyNuxtImg } from "#components";

const images = [
  "/img-20.jpeg",
  "/img-4.jpeg",
  "/img-9.jpeg",
  "/img-17.jpg",
  "/img-25.jpeg",
  "/img-26.jpeg",
];
</script>
<template>
  <section id="gallery" class="mt-10 p-6 flex flex-col text-white bg-slate-900">
    <p
      data-aos="fade-in"
      data-aos-duration="1000"
      class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 flex justify-center items-center font-medium rounded-3xl text-sm w-40 md:text-base px-2 py-2 text-center mb-2 self-center"
    >
      Gallery
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-xl"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <NuxtImg
          :src="image"
          alt=""
          class="w-full h-[25rem] md:h-[29rem] lg:h-[30rem] rounded-xl"
        />
      </div>
    </div>
    <div class="self-center mt-8">
      <NuxtLink
        data-aos="fade-in"
        data-aos-duration="1000"
        to="/gallery"
        class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 md:flex lg:flex font-medium rounded-lg text-base px-4 py-3 md:w-40 text-center hover:bg-green-400 transition-all duration-200"
      >
        View More <i class="pi pi-arrow-right text-base ml-2"></i>
      </NuxtLink>
    </div>
  </section>
</template>
