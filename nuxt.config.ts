import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/eslint", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "zh-TW",
    locales: [
      { code: "zh-TW", name: "繁體中文", file: "zh-TW.json" },
      { code: "en", name: "English", file: "en.json" },
      { code: "th", name: "ภาษาไทย", file: "th.json" },
    ],
  },
});
