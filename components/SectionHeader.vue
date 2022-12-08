<!-- This is the page header
TODO:
- make it responsive and add styles with tailwind-->

<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <header> //insert tailwind here
    <h1>{{ title }}</h1>
  </header>
</template>