<!-- This is the page header
TODO:
- make it responsive and add styles with tailwind-->

<template>
  <header class="text-5xl p-5 m-auto">
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

