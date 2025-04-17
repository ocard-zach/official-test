<script setup>
const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.about.title"),
  description: () => t("meta.about.description"),
  ogTitle: () => t("meta.about.title"),
  ogDescription: () => t("meta.about.description"),
  twitterTitle: () => t("meta.about.title"),
  twitterDescription: () => t("meta.about.description"),
});
</script>

<template>
  <section>
    <h1>{{ $t("about.title") }}</h1>
    <p>{{ $t("about.desc") }}</p>
  </section>
</template>
