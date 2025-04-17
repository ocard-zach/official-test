<script setup>
const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.products.title"),
  description: () => t("meta.products.description"),
  ogTitle: () => t("meta.products.title"),
  ogDescription: () => t("meta.products.description"),
  twitterTitle: () => t("meta.products.title"),
  twitterDescription: () => t("meta.products.description"),
});
</script>

<template>
  <section>
    <h1>{{ $t("products.title") }}</h1>
    <p>{{ $t("products.desc") }}</p>
  </section>
</template>
