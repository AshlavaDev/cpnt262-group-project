<template>
  <div class="container flex justify-center min-w-full">
    <div class="flex flex-col items-center max-w-screen-sm lg:max-w-screen-lg">
      <div>
        <h2 class="text-6xl text-center py-4">{{ title }}</h2> 
        <img :src="`${image}`" :alt="`${alt}`" />
        
      </div>
      <div class="text-center text-lg md:text-xl py-3 px-2 flex flex-col gap-2 post">
        <ContentSlot :use="$slots.default" />
      </div>
      <NuxtLink to="/blog/posts">Back to Posts</NuxtLink>
    </div>
  </div>
</template>

<script setup>

defineProps({
  image: {
    type: String,
  },
  alt: {
    type: String,
    default: 'Image not found'
  },
  title: {
    type: String,
    default: 'A Blog Post Title'
  }
})

</script>