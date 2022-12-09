<template>
  <AppHead :title="headTitle" />
  <SectionHeader :title="pageTitle"/>
  <AppMain />

</template>

<script setup>

const pageTitle = "Labyritronics";
const headTitle = pageTitle + " Home";

</script>