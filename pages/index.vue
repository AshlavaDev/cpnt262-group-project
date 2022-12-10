<template>
  <AppHead :title="headTitle" />
  <SectionHeader :title="pageTitle" class="bg-homeHero text-8xl md:text-10xl">
    <TheButton :buttonLink="buttonLink" :button-text="buttonText" />
  </SectionHeader>

</template>

<script setup>

const pageTitle = "Labyritronics";
const headTitle = pageTitle + " Home";

const buttonText = "Go to Posts";
const buttonLink = "blog-posts";

</script>