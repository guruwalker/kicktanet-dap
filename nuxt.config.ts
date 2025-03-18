// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  app: {
    head: {
      title: "Acadia - University & Online Course vue nuxt Template",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js",
        },
      ],
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      }
    }
  },
  css: [
    "@/assets/css/animate.css",
    "swiper/css/bundle",
    "@/assets/css/font-awesome-pro.css",
    "@/assets/scss/main.scss",
  ],
})
