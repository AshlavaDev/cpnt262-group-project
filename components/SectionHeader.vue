<!-- This is the page header
TODO:
- make it responsive and add styles with tailwind-->

<template>
  <header class="flex flex-col justify-center items-center flex-grow text-5xl p-5 m-auto min-w-full bg-cover bg-no-repeat bg-center">
    <h1>{{ title }}</h1>
    <slot></slot>     
  </header>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

