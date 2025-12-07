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
  <section class="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
    <!-- Ambient background effects -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-500/10 blur-3xl rounded-full"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Text Content -->
        <div 
          class="space-y-8 lg:pr-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="space-y-4">
            <div class="inline-block">
              <span class="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
                Professional Photography
              </span>
            </div>
            
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span class="block text-white mb-2">Time Fades,</span>
              <span class="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                My Shots Don't.
              </span>
            </h1>
            
            <p class="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
              I don't just take pictures — I capture vibes. Weddings, portraits, and raw moments you'll never forget.
            </p>
          </div>
          
          <div class="flex flex-wrap gap-4">
            <NuxtLink
              to="/gallery"
              class="group relative px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-0.5"
            >
              View My Work
              <span class="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </NuxtLink>
            
            <a
              href="#contact"
              class="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 text-white font-semibold rounded-xl transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          
          <!-- Stats -->
          <div class="flex gap-8 pt-4">
            <div>
              <div class="text-3xl font-bold text-white">500+</div>
              <div class="text-sm text-slate-400">Events Captured</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white">1000+</div>
              <div class="text-sm text-slate-400">Happy Clients</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white">5★</div>
              <div class="text-sm text-slate-400">Rated Service</div>
            </div>
          </div>
        </div>

        <!-- Modern Bento Grid -->
        <div 
          class="relative"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <!-- Glow effect behind grid -->
          <div class="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-3xl opacity-30 animate-pulse"></div>
          
          <div class="relative grid grid-cols-6 grid-rows-6 gap-3 h-[500px] lg:h-[600px]">
            <!-- Large featured image - top left -->
            <div class="col-span-4 row-span-4 rounded-2xl overflow-hidden group relative bg-slate-800">
              <NuxtImg
                :src="images[0]"
                alt="Featured"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Wedding Collection
              </div>
            </div>

            <!-- Tall image - top right -->
            <div class="col-span-2 row-span-3 rounded-2xl overflow-hidden group relative bg-slate-800">
              <NuxtImg
                :src="images[1]"
                alt="Portrait"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <!-- Bottom row - three images -->
            <div class="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative bg-slate-800">
              <NuxtImg
                :src="images[2]"
                alt="Event"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div class="col-span-2 row-span-3 rounded-2xl overflow-hidden group relative bg-slate-800">
              <NuxtImg
                :src="images[3]"
                alt="Portrait"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div class="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative bg-slate-800">
              <NuxtImg
                :src="images[4]"
                alt="Moment"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
  </section>
</template>  

