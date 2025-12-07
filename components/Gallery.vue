<script setup>
const images = [
  "/img-39.jpg",
  "/img-45.jpg",
  "/img-71.jpg",
  "/img-72.jpg",
  "/img-46.jpg",
  "/img-80.jpg",
  "/img-81.jpg",
  "/img-82.jpg",
  "/img-83.jpg",
  "/img-84.jpg",
  "/img-85.jpg",
  "/img-86.jpg",
  "/img-87.jpg",
  "/img-114.jpg",
  "/img-115.jpg",
  "/img-116.jpg",
  "/img-117.jpg",
  "/img-118.jpg",
  "/img-119.jpg",
  "/img-88.jpg",
  "/img-89.jpg",
  "/img-90.jpg",
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
  "/img-91.jpg",
  "/img-92.jpg",
  "/img-93.jpg",
  "/img-94.jpg",
  "/img-95.jpg",
  "/img-96.jpg",
  "/img-98.jpg",
  "/img-99.jpg",
  "/img-100.jpg",
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
  "/img-101.jpg",
  "/img-102.jpg",
  "/img-103.jpg",
  "/img-104.jpg",
  "/img-105.jpg",
  "/img-106.jpg",
  "/img-107.jpg",
  "/img-108.jpg",
  "/img-109.jpg",
  "/img-110.jpg",
  "/img-111.jpg",
  "/img-112.jpg",
  "/img-113.jpg",
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
  <section id="gallery" class="mt-20 py-8 px-6 flex flex-col text-white">
    <!-- Responsive Masonry Grid -->
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-xl group"
        :class="{
          'row-span-2': index % 9 === 0,
          'col-span-2 md:col-span-1': index % 13 === 0
        }"
        data-aos="fade-up"
        data-aos-duration="600"
        :data-aos-delay="Math.min(index * 30, 300)"
      >
        <NuxtImg
          :src="image"
          alt="Photography gallery image"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          :class="{
            'aspect-[3/4]': index % 9 === 0,
            'aspect-square': index % 9 !== 0
          }"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
