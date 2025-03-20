import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },

  site: {
    name: "Kisoko Portal",
    description: "",
    url: "https://kisoko.org",
    language: "en",
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
  ],

  colorMode: {
    classSuffix: "",
    preference: "light",
  },

  compatibilityDate: "2024-03-08",
});
