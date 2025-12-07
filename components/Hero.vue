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
  <section id="hero" class="relative flex flex-col lg:flex-row gap-6 lg:gap-8 mt-24 px-6 py-4 lg:py-6 min-h-[85vh] lg:min-h-[90vh]">
    <!-- Text Content -->
    <div class="w-full lg:w-[42%] flex flex-col justify-center z-10">
      <h1
        class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col tracking-tight text-white font-black mb-4 leading-[1.1]"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <span>Time Fades</span>
        <span class="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent drop-shadow-lg"> My Shots Don't.</span>
      </h1>
      <p
        class="text-gray-300 text-base md:text-lg lg:text-xl tracking-wide mb-6 leading-relaxed max-w-xl"
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
          class="text-white tracking-wide border-2 border-green-500 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 font-semibold rounded-xl text-sm md:text-base px-7 py-3.5 text-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
        >
          View My Work
        </NuxtLink>
        <a
          href="#contact"
          class="text-white tracking-wide bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:shadow-green-500/60 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 font-semibold rounded-xl text-sm md:text-base px-7 py-3.5 text-center transition-all duration-300 shadow-lg hover:-translate-y-0.5"
        >
          Contact Me
        </a>
      </div>
    </div>

    <!-- Enhanced Bento Grid -->
    <div
      class="w-full lg:w-[58%] mt-6 lg:mt-0"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div class="grid grid-cols-8 gap-2 md:gap-3 h-[450px] md:h-[550px] lg:h-[650px]">
        <!-- Large hero image - dominant focal point -->
        <div class="col-span-5 row-span-6 overflow-hidden rounded-3xl group relative shadow-2xl">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[0]"
            alt="Featured photography"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
          />
        </div>
        
        <!-- Right column - stacked medium images -->
        <div class="col-span-3 row-span-3 overflow-hidden rounded-2xl group relative shadow-xl">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[1]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
          />
        </div>
        
        <div class="col-span-3 row-span-3 overflow-hidden rounded-2xl group relative shadow-xl">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[2]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
          />
        </div>
        
        <!-- Bottom row - small accent images -->
        <div class="col-span-2 row-span-2 overflow-hidden rounded-xl group relative shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[3]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
          />
        </div>
        
        <div class="col-span-2 row-span-2 overflow-hidden rounded-xl group relative shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[4]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
          />
        </div>
        
        <div class="col-span-2 row-span-2 overflow-hidden rounded-xl group relative shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[5]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
          />
        </div>
        
        <div class="col-span-2 row-span-2 overflow-hidden rounded-xl group relative shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <NuxtImg
            :src="images[6]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

