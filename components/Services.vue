<script setup>
const services = [
  {
    icon: "pi pi-user",
    name: " Potrait & Lifetyle",
    description: "For the bold, the soft, the real you - captured perfectly",
    List: [
      "individual & Couple Potraits",
      "Personal Brand Shots ",
      "Lifestyle Photography",
      "Family Sessions",
      "Proffessional Headshots",
    ],
  },

  {
    icon: "pi pi-calendar",
    name: " Events & Celebrations",
    description: "Turning fleeting moments into timeless memories",
    List: [
      "Weddings",
      "Birthdays ",
      "Graduations",
      "Corporate Events",
      "Concerts & Provate Parties",
    ],
  },
  {
    icon: "pi pi-cog",
    name: " Editing & EnhanceMents",
    description: "Because raw isn't always ready. Let's make you photos pop",
    List: [
      "Proffessional Retouching ",
      "Color Grading ",
      "Background cleanup",
      " Skin Smoothing & Blemish Fixes",
      "Creative Edits ",
    ],
  },
];
</script>
<template>
  <section id="services" class="p-6 text-white flex flex-col justify-center">
    <p
      data-aos="fade-in"
      data-aos-duration="1000"
      class="text-white tracking-widest border border-green-500 cursor-pointer focus:ring-4 flex justify-center items-center font-medium rounded-3xl text-sm w-40 md:text-base px-2 py-2 text-center mb-2 self-center"
    >
      Services I offer
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
      <div v-for="(service, index) in services" :key="index">
        <div
          class="overflow-hidden rounded-xl group hover:shadow-white hover:shadow-md transition duration-300"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <div class="w-full bg-slate-900 p-3 h-80 md:h-78 lg:h-70">
            <div
              class="border border-green-500 flex justify-center items-center w-18 h-18 px-2 py-2 rounded-full mb-2 group-hover:shadow-lg group-hover:shadow-green-600 transition duration-200"
            >
              <i :class="service.icon" class="text-2xl font-bold"></i>
            </div>
            <h1 class="text-xl md:text-2xl font-bold mb-1">
              {{ service.name }}
            </h1>
            <p class="mb-2 text-sm">{{ service.description }}</p>
            <ul>
              <li
                v-for="(listItem, index) in service.List"
                :key="index"
                class="flex flex-row items-baseline"
              >
                <i class="pi pi-check mr-3 text-base"></i>
                {{ listItem }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
