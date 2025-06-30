<script setup>
const images = [
  "/img-77.jpg",
  "/img-34.jpg",
  "/img-35.jpg",
  "/img-20.jpeg",
  "/img-4.jpeg",
  "/img-9.jpeg",
  "/img-36.jpg",
  "/img-78.jpg",
  "/img-79.jpg",
  "/img-17.jpg",
  "/img-25.jpeg",
  "/img-26.jpeg",
  "/img-47.jpg",
  "/img-48.jpg",
  "/img-49.jpg",
  "/img-50.jpg",
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
    <div
      class="flex flex-wrap flex-col justify-center md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
    >
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
          class="w-full rounded-xl object-cover md:h-[27rem] lg:h-[20rem]"
        />
      </div>
    </div>
    <div class="self-center mt-8">
      <NuxtLink
        data-aos="fade-in"
        data-aos-duration="1000"
        to="/gallery"
        class="text-white tracking-widest border border-green-500 cursor-pointer flex justify-center items-center font-medium rounded-lg text-base px-4 py-3 md:w-40 text-center hover:bg-green-400 transition-all duration-200"
      >
        View More <i class="pi pi-arrow-right text-base ml-2"></i>
      </NuxtLink>
    </div>
  </section>
</template>
