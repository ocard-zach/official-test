import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "nuxt-seo-utils",
    "nuxt-schema-org",
  ],
  i18n: {
    defaultLocale: "zh-TW",
    locales: [
      { code: "zh-TW", name: "繁體中文", file: "zh-TW.json" },
      { code: "en", name: "English", file: "en.json" },
      { code: "th", name: "ภาษาไทย", file: "th.json" },
    ],
    detectBrowserLanguage: {
      useCookie: false,
    },
  },
  site: {
    url: "https://zach-the-best.netlify.app",
    name: "ZACH THE BEST",
  },
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "4cvfCrWC_-0HpiVOOS6wHtjkhzIgjcGAidZdq72rfyI",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});