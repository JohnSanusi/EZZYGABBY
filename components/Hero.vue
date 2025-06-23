<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
const images = ["/img-2.jpeg", "/img-3.jpeg", "/img-5.jpg", "/img-8.jpeg"];
</script>
<template>
  <section id="hero" class="flex flex-col lg:flex-row gap-4 mt-32 p-6">
    <div class="w-full lg:w-[50%]">
      <h1
        class="text-3xl md:text-5xl flex flex-col tracking-normal text-white font-bold mb-2"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <span>Time Fades</span>
        <span class="text-green-500"> My Shots Don't.</span>
      </h1>
      <p
        class="text-white text-base md:text-lg tracking-wide mb-6 leading-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        I don't just take pictures - I capture Vibes. <br />
        Weddings, potraits, and raw moments you'll never forget
      </p>
      <div
        class="flex flex-row gap-4 items-center"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <NuxtLink
          to="/gallery"
          class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 md:flex lg:flex font-medium rounded-lg text-sm md:text-base px-4 py-3 md:w-40 text-center hover:bg-green-400 transition-all duration-200"
        >
          View My Work
        </NuxtLink>
        <a
          href="#contact"
          class="text-white tracking-widest bg-green-500 hover:bg-green-600 hover:shadow-green-500/50 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 md:flex lg:flex font-medium rounded-lg text-sm md:text-base px-4 py-3 md:w-34 text-center transition-all duration-200 mr-4"
        >
          Contact Me
        </a>
      </div>
    </div>
    <div
      class="w-full lg:w-[50%] mt-10"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <Splide
        :options="{
          type: 'loop',
          perPage: 3,
          gap: '1rem',
          pagination: false,
          arrows: false,
          AutoScroll: {
            speed: 2,
            pauseOnHover: true,
          },
          breakpoints: {
            576: {
              gap: '1rem',
            },
            768: {
              gap: '0.5rem',
            },
          },
        }"
        :extensions="{ AutoScroll }"
      >
        <SplideSlide v-for="(image, index) in images" :key="index">
          <NuxtImg :src="image" alt="" class="w-36 h-30 md:w-4xl md:h-58"
        /></SplideSlide>
      </Splide>
    </div>
  </section>
</template>
