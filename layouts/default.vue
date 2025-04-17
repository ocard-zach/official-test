<script setup>
const localePath = useLocalePath();
</script>

<template>
  <div class="layout">
    <header
      class="flex items-center justify-between p-4 border-1 border-amber-200"
    >
      <nav class="flex items-center space-x-4">
        <NuxtLink
          :to="localePath('index')"
          class="hover:underline bg-amber-50 p-2"
          >{{ $t("nav.home") }}</NuxtLink
        >
        <NuxtLink
          :to="localePath('products')"
          class="hover:underline bg-amber-50 p-2"
          >{{ $t("nav.products") }}</NuxtLink
        >
        <NuxtLink
          :to="localePath('faq')"
          class="hover:underline bg-amber-50 p-2"
          >{{ $t("nav.faq") }}</NuxtLink
        >
        <NuxtLink
          :to="localePath('about')"
          class="hover:underline bg-amber-50 p-2"
          >{{ $t("nav.about") }}</NuxtLink
        >
      </nav>

      <i18nPicker />
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
