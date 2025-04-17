<script setup>
const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.faq.title"),
  description: () => t("meta.faq.description"),
  ogTitle: () => t("meta.faq.title"),
  ogDescription: () => t("meta.faq.description"),
  twitterTitle: () => t("meta.faq.title"),
  twitterDescription: () => t("meta.faq.description"),
});
</script>

<template>
  <section>
    <h1>{{ $t("faq.title") }}</h1>
    <h2>{{ $t("faq.q1") }}</h2>
    <p>{{ $t("faq.a1") }}</p>
  </section>
</template>
