<script setup>
const images = [
  "/img-29.jpg",
  "/img-2.jpeg",
  "/img-30.jpg",
  "/img-3.jpeg",
  "/img-31.jpg",
  "/img-5.jpg",
];
</script>
<template>
  <section id="hero" class="flex flex-col lg:flex-row gap-8 mt-32 p-6">
    <!-- Text Content -->
    <div class="w-full lg:w-[50%] flex flex-col justify-center">
      <h1
        class="text-3xl md:text-5xl lg:text-6xl flex flex-col tracking-normal text-white font-bold mb-4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <span>Time Fades</span>
        <span class="text-green-500"> My Shots Don't.</span>
      </h1>
      <p
        class="text-white text-base md:text-lg tracking-wide mb-8 leading-7 max-w-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        I don't just take pictures - I capture Vibes. <br />
        Weddings, potraits, and raw moments you'll never forget
      </p>
      <div
        class="flex flex-row gap-4 items-center flex-wrap"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <NuxtLink
          to="/gallery"
          class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm md:text-base px-6 py-3 text-center hover:bg-green-400 transition-all duration-200"
        >
          View My Work
        </NuxtLink>
        <a
          href="#contact"
          class="text-white tracking-widest bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/50 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm md:text-base px-6 py-3 text-center transition-all duration-200"
        >
          Contact Me
        </a>
      </div>
    </div>

    <!-- Modern Image Grid -->
    <div
      class="w-full lg:w-[50%] mt-10 lg:mt-0"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
        <!-- Large featured image -->
        <div class="col-span-2 row-span-2 overflow-hidden rounded-2xl group">
          <NuxtImg
            :src="images[0]"
            alt="Featured photography"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <!-- Medium image -->
        <div class="row-span-2 overflow-hidden rounded-2xl group hidden md:block">
          <NuxtImg
            :src="images[1]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <!-- Small images -->
        <div class="overflow-hidden rounded-2xl group">
          <NuxtImg
            :src="images[2]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div class="overflow-hidden rounded-2xl group">
          <NuxtImg
            :src="images[3]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div class="overflow-hidden rounded-2xl group hidden md:block">
          <NuxtImg
            :src="images[4]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div class="overflow-hidden rounded-2xl group hidden md:block">
          <NuxtImg
            :src="images[5]"
            alt="Photography sample"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  </section>
</template>
