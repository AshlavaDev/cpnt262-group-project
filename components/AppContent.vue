<!-- A component to store written paragraph content to make formatiting easier -->

<template>
  <div>
    <p v-for="paragraph in content" :key="paragraph.id" class="max-w-prose py-4 text-lg md:text-xl">{{ paragraph }}</p>
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