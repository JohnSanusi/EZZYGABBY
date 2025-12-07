// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "notivue/nuxt", "@nuxtjs/sitemap"],
  sitemap: {
    siteUrl: "https://eazzygabby.vercel.app",
    trailingSlash: true,
  },
  ssr: true,
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
    smtpHost: process.env.SMTP_HOST,
    smtpPort: 587,
    smtpPass: process.env.SMTP_PASS,
    smtpUser: process.env.SMTP_USER,
    clientEmail: process.env.CLIENT_EMAIL,
    public: {},
  },
});
