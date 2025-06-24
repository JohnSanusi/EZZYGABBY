// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "notivue/nuxt"],
  css: [
    "~/assets/main.css",
    "notivue/notification.css",
    "notivue/animations.css",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  notivue: {},
  runtimeConfig: {
    smtpHost: "",
    smtpPort: 587,
    smtpPass: "",
    smtpUser: "",
    clientEmail: "",
    public: {},
  },
});
