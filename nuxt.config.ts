import { resolve } from "path";
export default defineNuxtConfig({

  ssr: false,

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: [
    "~/assets/css/vendors/bootstrap.min.css",
    "~/assets/css/vendors/flaticon.css",
    "~/assets/css/vendors/menu.css",
    "~/assets/css/vendors/fade-down.css",
    "~/assets/css/vendors/magnific-popup.css",
    // "~/assets/css/vendors/animate.css",
    "~/assets/css/main.scss",
    "~/assets/css/override.scss",
    "~/assets/css/responsive.scss",
    "~/assets/css/color-scheme/blue.scss",
    "~/assets/css/color-scheme/crocus.scss",
    "~/assets/css/color-scheme/green.scss",
    "~/assets/css/color-scheme/magenta.scss",
    "~/assets/css/color-scheme/pink.scss",
    "~/assets/css/color-scheme/skyblue.scss",
    "~/assets/css/color-scheme/violet.scss",
    "animate.css",
    "animate.css/animate.min.css",
  ],

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: {
            wght: [300, 400, 500, 600, 700],
          },
          "Plus+Jakarta+Sans": {
            wght: [400, 500, 600, 700],
          },
          Inter: {
            wght: [400, 500, 600, 700, 800],
          },
          download: true,
          inject: true,
        },
      },
    ],
    "nuxt-swiper",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
  ],

  ui: {
    icons: ["lucide"],
  },

  supabase: {
    redirect: false,
    url: process.env.NUXT_SUPABASE_URL,
    key: process.env.NUXT_SUPABASE_ANON_KEY,
    serviceKey: process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY,
  },

  runtimeConfig: {
    public: {
      APP_URL: process.env.APP_URL,
      supabaseUrl: process.env.NUXT_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_SUPABASE_ANON_KEY,
      supabaseServiceRoleKey: process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY,
      authBaseURL: process.env.NUXT_AUTH_BASE_URL,
      prodServer: process.env.NUXT_PROD_SERVER_URL,
      apiBaseURL: process.env.NUXT_API_BASE_URL,
      port: process.env.NUXT_PORT,
    },
  },

  colorMode: {
    classSuffix: "",
    preference: "light",
  },

  compatibilityDate: "2024-03-08",
});
