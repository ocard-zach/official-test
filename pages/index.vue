<script setup>
const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.home.title"),
  description: () => t("meta.home.description"),
  ogTitle: () => t("meta.home.title"),
  ogDescription: () => t("meta.home.description"),
  twitterTitle: () => t("meta.home.title"),
  twitterDescription: () => t("meta.home.description"),
});
</script>

<template>
  <section>
    <h1>{{ $t("home.headline") }}</h1>
    <p>{{ $t("home.intro") }}</p>
  </section>
</template>
