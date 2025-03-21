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
    url: "https://uujbxewichsqfnwasuxe.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1amJ4ZXdpY2hzcWZud2FzdXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTE4MDgsImV4cCI6MjA1ODA2NzgwOH0.Ok33zThBGTPpfiLC3fL49H-vtcoN0iEqdqe5PdUp5nY",
    serviceKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1amJ4ZXdpY2hzcWZud2FzdXhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MjQ5MTgwOCwiZXhwIjoyMDU4MDY3ODA4fQ.gaeKsVZN_qiMdfaVjBPJHBryzGhoZ9MzpAv3hQ22m9Y",
  },

  runtimeConfig: {
    public: {
      APP_URL: process.env.APP_URL,
      supabaseUrl: "https://uujbxewichsqfnwasuxe.supabase.co",
      supabaseAnonKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1amJ4ZXdpY2hzcWZud2FzdXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTE4MDgsImV4cCI6MjA1ODA2NzgwOH0.Ok33zThBGTPpfiLC3fL49H-vtcoN0iEqdqe5PdUp5nY",
      supabaseServiceRoleKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1amJ4ZXdpY2hzcWZud2FzdXhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MjQ5MTgwOCwiZXhwIjoyMDU4MDY3ODA4fQ.gaeKsVZN_qiMdfaVjBPJHBryzGhoZ9MzpAv3hQ22m9Y",
      port: 4000,
    },
  },

  colorMode: {
    classSuffix: "",
    preference: "light",
  },

  compatibilityDate: "2024-03-08",
});


