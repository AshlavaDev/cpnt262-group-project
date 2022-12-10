<!-- A component to store written paragraph content to make formatiting easier -->

<template>
  <div class="flex flex-col items-center grow py-5">
    <p v-for="paragraph in content" :key="paragraph.id" class="max-w-prose py-4 text-lg md:text-xl font-contentSans">{{ paragraph }}</p>
  </div>
</template>

<script setup>

defineProps({
  content: {
    type: Array,
    default: ['Website paragraph content']
  }
})

</script>