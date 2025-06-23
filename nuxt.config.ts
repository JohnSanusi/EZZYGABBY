// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', 'notivue/nuxt'],
  css: ['~/assets/main.css', 'notivue/notification.css', 'notivue/animations.css'],
  vite: {
    plugins: [
      tailwindcss(),
      
    ],
  },
  notivue:{
    animation:{
      enter: 'fade',
      leave: 'fade'
    }
  },
  runtimeConfig:{
    SMPT_HOST:process.env.SMPT_HOST,
    SMPT_USER:process.env.SMPT_USER,
    SMPT_PASS: process.env.SMPT_PASS,
    SMPT_PORT: process.env.SMPT_PORT,
    CLIENT_EMAIL:process.env.CLIENT_EMAIL,
    public: {}
  }
})