import { defineNuxtPlugin } from "#app";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide?.default || VueSplide);
});
