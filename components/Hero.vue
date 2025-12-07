<script setup>
const images = [
  "/img-29.jpg",
  "/img-2.jpeg",
  "/img-30.jpg",
  "/img-3.jpeg",
  "/img-31.jpg",
  "/img-5.jpg",
  "/img-32.jpg",
  "/img-8.jpeg",
];
</script>
<template>
  <section id="hero" class="relative flex flex-col lg:flex-row gap-6 lg:gap-12 mt-32 px-6 py-8 lg:py-12">
    <!-- Text Content -->
    <div class="w-full lg:w-[45%] flex flex-col justify-center z-10">
      <h1
        class="text-4xl md:text-6xl lg:text-7xl flex flex-col tracking-tight text-white font-bold mb-6 leading-tight"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <span>Time Fades</span>
        <span class="text-green-500 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"> My Shots Don't.</span>
      </h1>
      <p
        class="text-gray-300 text-lg md:text-xl tracking-wide mb-10 leading-8 max-w-2xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        I don't just take pictures - I capture Vibes. <br />
        Weddings, portraits, and raw moments you'll never forget
      </p>
      <div
        class="flex flex-row gap-4 items-center flex-wrap"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <NuxtLink
          to="/gallery"
          class="text-white tracking-widest border-2 border-green-500 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 font-semibold rounded-xl text-sm md:text-base px-8 py-4 text-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 shadow-lg shadow-green-500/20"
        >
          View My Work
        </NuxtLink>
        <a
          href="#contact"
          class="text-white tracking-widest bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:shadow-green-500/50 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 font-semibold rounded-xl text-sm md:text-base px-8 py-4 text-center transition-all duration-300 shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </div>

    <!-- Modern Image Grid -->
    <div
      class="w-full lg:w-[55%] mt-8 lg:mt-0"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div class="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 h-[500px] md:h-[600px]">
        <!-- Large featured image - takes up most space -->
        <div class="col-span-4 row-span-4 overflow-hidden rounded-3xl group relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[0]"
            alt="Featured photography"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
        
        <!-- Top right column - 2 medium images stacked -->
        <div class="col-span-2 row-span-2 overflow-hidden rounded-2xl group relative hidden md:block">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[1]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
        
        <div class="col-span-2 row-span-2 overflow-hidden rounded-2xl group relative hidden md:block">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[2]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
        
        <!-- Bottom row - 4 small images -->
        <div class="col-span-1 row-span-2 overflow-hidden rounded-xl group relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[3]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
        
        <div class="col-span-1 row-span-2 overflow-hidden rounded-xl group relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[4]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
        
        <div class="col-span-1 row-span-2 overflow-hidden rounded-xl group relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[5]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
        
        <div class="col-span-1 row-span-2 overflow-hidden rounded-xl group relative">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[6]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  </section>
</template>

