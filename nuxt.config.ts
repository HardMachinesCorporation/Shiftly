// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/color-mode'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ui:{
    colorMode:false,
  },
  colorMode: {
    dataValue: 'theme', // <html data-theme="dark|light">
    classSuffix: '',    // pas de `-dark` ou `-light`
  },
})