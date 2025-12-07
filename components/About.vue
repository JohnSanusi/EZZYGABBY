<script setup></script>

<template>
  <section
    id="about"
    class="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 lg:py-28 overflow-hidden"
  >
    <!-- Background effects -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>
    </div>

    <div class="relative max-w-5xl mx-auto px-6">
      <!-- Section Header -->
      <div 
        class="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span class="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm mb-6">
          About Me
        </span>
        <h2 
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Telling Stories Through 
          <span class="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
            The Lens
          </span>
        </h2>
      </div>

      <!-- Content Card -->
      <div 
        class="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="space-y-6 text-center">
          <!-- Intro Text -->
          <p class="text-lg sm:text-xl text-slate-200 leading-relaxed">
            Hi, I'm <span class="text-emerald-400 font-semibold">Okorobobi Godwin</span>, a photographer with a passion for capturing real, honest moments.
          </p>
          
          <!-- Description -->
          <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Whether it's portraits, events, or everyday life, I aim to create images that feel natural, meaningful, and timeless. Every photograph tells a story, and I'm here to help you tell yours.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-8 border-t border-slate-700/50">
            <div class="space-y-2">
              <div class="text-3xl sm:text-4xl font-bold text-emerald-400">500+</div>
              <div class="text-sm text-slate-400">Events Captured</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl sm:text-4xl font-bold text-emerald-400">1000+</div>
              <div class="text-sm text-slate-400">Happy Clients</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl sm:text-4xl font-bold text-emerald-400">5+</div>
              <div class="text-sm text-slate-400">Years Experience</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl sm:text-4xl font-bold text-emerald-400">5★</div>
              <div class="text-sm text-slate-400">Rated Service</div>
            </div>
          </div>

          <!-- CTA -->
          <div class="pt-8">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-0.5"
            >
              Let's Work Together
              <i class="pi pi-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Feature Cards -->
      <div 
        class="grid sm:grid-cols-3 gap-6 mt-12"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300">
          <div class="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="pi pi-heart text-2xl text-emerald-400"></i>
          </div>
          <h3 class="text-white font-semibold mb-2">Passionate</h3>
          <p class="text-slate-400 text-sm">Every shot comes from the heart</p>
        </div>

        <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300">
          <div class="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="pi pi-star text-2xl text-emerald-400"></i>
          </div>
          <h3 class="text-white font-semibold mb-2">Professional</h3>
          <p class="text-slate-400 text-sm">High-quality results, always</p>
        </div>

        <div class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300">
          <div class="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="pi pi-users text-2xl text-emerald-400"></i>
          </div>
          <h3 class="text-white font-semibold mb-2">Client-Focused</h3>
          <p class="text-slate-400 text-sm">Your vision is my priority</p>
        </div>
      </div>
    </div>
  </section>
</template>
