<script setup>
const images = [
  "/img-39.jpg",
  "/img-45.jpg",
  "/img-71.jpg",
  "/img-72.jpg",
  "/img-46.jpg",
  "/img-2.jpeg",
  "/img-3.jpeg",
  "/img-4.jpeg",
  "/img-5.jpg",
  "/img-65.jpg",
  "/img-66.jpg",
  "/img-67.jpg",
  "/img-68.jpg",
  "/img-69.jpg",
  "/img-70.jpg",
  "/img-6.jpg",
  "/img-7.jpeg",
  "/img-37.jpg",
  "/img-38.jpg",
  "/img-8.jpeg",
  "/img-9.jpeg",
  "/img-10.jpeg",
  "/img-40.jpg",
  "/img-11.jpeg",
  "/img-12.jpeg",
  "/img-13.jpeg",
  "/img-41.jpg",
  "/img-14.jpg",
  "/img-28.jpeg",
  "/img-42.jpg",
  "/img-25.jpeg",
  "/img-17.jpg",
  "/img-61.jpg",
  "/img-62.jpg",
  "/img-63.jpg",
  "/img-64.jpg",
  "/img-43.jpg",
  "/img-18.jpeg",
  "/img-19.jpeg",
  "/img-44.jpg",
  "/img-27.jpeg",
  "/img-24.jpeg",
  "/img-50.jpg",
  "/img-51.jpg",
  "/img-52.jpg",
  "/img-53.jpg",
  "/img-54.jpg",
  "/img-55.jpg",
  "/img-57.jpg",
  "/img-58.jpg",
  "/img-59.jpg",
  "/img-60.jpg",
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
          class="w-full h-[26rem] md:h-[29rem] lg:h-[30rem] rounded-xl"
        />
      </div>
    </div>
  </section>
</template>
