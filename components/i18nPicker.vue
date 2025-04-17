<script setup>
const { locales, setLocale } = useI18n();
</script>

<template>
  <div>
    <button
      v-for="locale in locales"
      :key="locale.code"
      class="p-2 m-2 bg-gray-200 rounded hover:bg-gray-300"
      @click="setLocale(locale.code)"
    >
      {{ locale.name }}
    </button>
  </div>
</template>
