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
  <section id="gallery" class="mt-16 py-12 px-6 flex flex-col text-white bg-slate-900">
    <p
      data-aos="fade-in"
      data-aos-duration="1000"
      class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 flex justify-center items-center font-medium rounded-3xl text-sm w-40 md:text-base px-2 py-2 text-center mb-8 self-center"
    >
      Gallery
    </p>
    
    <!-- Responsive Grid -->
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-xl group"
        :class="{
          'row-span-2': index % 7 === 0,
          'col-span-2 md:col-span-1': index % 11 === 0
        }"
        data-aos="fade-up"
        data-aos-duration="800"
        :data-aos-delay="index * 50"
      >
        <NuxtImg
          :src="image"
          alt="Photography gallery image"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          :class="{
            'aspect-[3/4]': index % 7 === 0,
            'aspect-square': index % 7 !== 0
          }"
        />
      </div>
    </div>
    
    <!-- View More Button -->
    <div class="self-center mt-12">
      <NuxtLink
        data-aos="fade-in"
        data-aos-duration="1000"
        to="/gallery"
        class="text-white tracking-widest border border-green-500 cursor-pointer flex justify-center items-center font-medium rounded-lg text-base px-6 py-3 md:w-48 text-center hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-200"
      >
        View More <i class="pi pi-arrow-right text-base ml-2"></i>
      </NuxtLink>
    </div>
  </section>
</template>
