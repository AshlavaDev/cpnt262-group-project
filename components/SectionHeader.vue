<!-- This is the page header
TODO:
- make it responsive and add styles with tailwind-->

<template>
  <header> //insert tailwind here
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

