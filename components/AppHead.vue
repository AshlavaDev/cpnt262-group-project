<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
</template>

<script setup>
defineProps({
  title: String,
  default: 'Labyritronics'
})
</script>