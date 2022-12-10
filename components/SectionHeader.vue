<!-- This is the page header -->

<template>
  <header class="flex flex-col justify-center items-center gap-6 grow p-5 m-auto min-w-full bg-cover bg-no-repeat bg-center font-headerDisplay">
    <h1 class="text-center">{{ title }}</h1>
    <slot></slot>     
  </header>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

