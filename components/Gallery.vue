<script setup>
import { LazyNuxtImg } from "#components";

const images = [
  "/img-1.jpg",
  "/img-2.jpeg",
  "/img-3.jpeg",
  "/img-4.jpeg",
  "/img-5.jpg",
  "/img-6.jpg",
  "/img-7.jpeg",
  "/img-8.jpeg",
  "/img-9.jpeg",
  "/img-10.jpeg",
  "/img-11.jpeg",
  "/img-12.jpeg",
  "/img-13.jpeg",
  "/img-14.jpg",
  "/img-28.jpeg",
  "/img-25.jpeg",
  "/img-17.jpg",
  "/img-18.jpeg",
  "/img-19.jpeg",
  "/img-27.jpeg",
  "/img-24.jpeg",
];
</script>
<template>
  <section id="gallery" class="mt-20 p-6 flex flex-col text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-xl"
      >
        <NuxtImg
          data-aos="fade-in"
          data-aos-duration="1000"
          :src="image"
          alt=""
          class="w-full h-[23rem] md:h-[29rem] lg:h-[30rem] rounded-xl"
        />
      </div>
    </div>
  </section>
</template>
