// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: ['~/assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig:{
    SMPT_HOST:'',
    SMPT_USER:'',
    SMPT_PASS: '',
    SMPT_PORT: '',
    CLIENT_EMAIL:'',
    public: {}
  }
})