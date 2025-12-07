<script setup>
const services = [
  {
    icon: "pi pi-user",
    name: "Portrait & Lifestyle",
    description: "For the bold, the soft, the real you - captured perfectly",
    List: [
      "Individual & Couple Portraits",
      "Personal Brand Shots",
      "Lifestyle Photography",
      "Family Sessions",
      "Professional Headshots",
    ],
  },

  {
    icon: "pi pi-calendar",
    name: "Events & Celebrations",
    description: "Turning fleeting moments into timeless memories",
    List: [
      "Weddings",
      "Birthdays",
      "Graduations",
      "Corporate Events",
      "Concerts & Private Parties",
    ],
  },
  {
    icon: "pi pi-cog",
    name: "Editing & Enhancements",
    description: "Because raw isn't always ready. Let's make your photos pop",
    List: [
      "Professional Retouching",
      "Color Grading",
      "Background Cleanup",
      "Skin Smoothing & Blemish Fixes",
      "Creative Edits",
    ],
  },
];
</script>
<template>
  <section id="services" class="py-16 px-6 text-white flex flex-col justify-center">
    <p
      data-aos="fade-in"
      data-aos-duration="1000"
      class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 flex justify-center items-center font-semibold rounded-3xl text-sm w-48 md:text-base px-4 py-2.5 text-center mb-12 self-center"
    >
      Services I Offer
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="group"
        data-aos="fade-up"
        data-aos-duration="800"
        :data-aos-delay="index * 100"
      >
        <div
          class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 h-full"
        >
          <!-- Gradient overlay on hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-600/0 group-hover:from-green-500/5 group-hover:to-green-600/10 transition-all duration-500"></div>
          
          <div class="relative p-6 md:p-8 flex flex-col h-full">
            <!-- Icon -->
            <div
              class="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300"
            >
              <i :class="service.icon" class="text-3xl text-green-400"></i>
            </div>
            
            <!-- Title -->
            <h3 class="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
              {{ service.name }}
            </h3>
            
            <!-- Description -->
            <p class="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              {{ service.description }}
            </p>
            
            <!-- List -->
            <ul class="space-y-3 mt-auto">
              <li
                v-for="(listItem, idx) in service.List"
                :key="idx"
                class="flex items-start gap-3 text-gray-300 text-sm md:text-base group/item hover:text-green-400 transition-colors duration-200"
              >
                <i class="pi pi-check-circle text-green-500 text-base mt-0.5 flex-shrink-0"></i>
                <span>{{ listItem }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
