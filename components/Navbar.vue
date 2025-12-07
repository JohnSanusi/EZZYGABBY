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
    class="bg-black/20 fixed w-full z-20 top-0 start-0 shadow-md backdrop-blur-md"
    data-aos="fade-down"
    data-aos-duration="1000"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"
    >
      <NuxtLink to="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="/logo.png"
          class="w-25 h-25 md:w-25 md:h-25 lg:w-30 lg:h-30"
          alt=""
        />
      </NuxtLink>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a
          href="#book"
          class="text-white tracking-widest bg-green-500 hover:bg-green-600 hover:shadow-green-500/50 cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-700 md:flex lg:flex font-medium rounded-lg text-sm md:text-base px-4 py-3 md:w-34 text-center transition-all duration-200 mr-4"
        >
          Book Event
        </a>
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden bg-slate-400 outline-none ring-2 ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          @click="toggleNavOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
        :class="navOpen ? 'flex' : 'hidden'"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li v-for="link in Links" :key="link.to">
            <a
              @click="toggleNavOpen"
              :href="link.to"
              class="block py-2 px-2 text-white rounded-sm hover:text-green-500 md:p-0"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
