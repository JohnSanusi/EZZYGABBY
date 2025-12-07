<script setup>
import { computed, ref } from "vue";

let navOpen = ref(false);

const toggleNavOpen = computed(() => {
  if (!navOpen.value) {
    navOpen.value = true;
  } else if (navOpen.value) {
    navOpen.value = false;
  }
});

let Links = [
  { name: "About", to: "/#about" },
  { name: "Services", to: "/#services" },
  { name: "Gallery", to: "/#gallery" },
  { name: "Contact", to: "/#contact" },
];
</script>

<template>
  <nav
    class="bg-slate-950/80 backdrop-blur-xl fixed w-full z-50 top-0 border-b border-slate-800/50 shadow-lg shadow-slate-950/50"
    data-aos="fade-down"
    data-aos-duration="1000"
  >
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <img
            src="/logo.png"
            class="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
            alt="EzzyGabby Logo"
          />
          <div class="hidden sm:block">
            <div class="text-white font-bold text-xl group-hover:text-emerald-400 transition-colors duration-300">
              EzzyGabby
            </div>
            <div class="text-emerald-400 text-xs tracking-wider">
              Photography
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <ul class="flex items-center gap-8">
            <li v-for="link in Links" :key="link.to">
              <a
                :href="link.to"
                class="text-slate-300 hover:text-emerald-400 font-medium transition-colors duration-300 relative group"
              >
                {{ link.name }}
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          <!-- CTA Button -->
          <a
            href="#book"
            class="group relative px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/50 hover:-translate-y-0.5"
          >
            <span class="relative z-10">Book Event</span>
            <span class="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 transition-all duration-300"
          aria-label="Toggle menu"
          @click="toggleNavOpen"
        >
          <i v-if="!navOpen" class="pi pi-bars text-xl"></i>
          <i v-else class="pi pi-times text-xl"></i>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="navOpen"
          class="md:hidden mt-6 pb-4 border-t border-slate-800/50 pt-6"
        >
          <ul class="space-y-4">
            <li v-for="link in Links" :key="link.to">
              <a
                @click="toggleNavOpen"
                :href="link.to"
                class="block px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-xl font-medium transition-all duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
          
          <!-- Mobile CTA -->
          <a
            href="#book"
            @click="toggleNavOpen"
            class="mt-6 w-full block text-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/50"
          >
            Book Event
          </a>
        </div>
      </transition>
    </div>
  </nav>
</template>
