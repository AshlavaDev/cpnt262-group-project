<template>
  <div class="container flex justify-center min-w-full py-4">
    <div class="flex flex-col items-center max-w-screen-sm lg:max-w-screen-lg">
      <div class="flex flex-col items-center">
        <SectionHeader :title="title" class="text-4xl md:text-6xl"/>
        <img :src="`${image}`" :alt="`${alt}`" loading="lazy" class="block object-scale-down  max-w-sm"/>
      </div>
      <div class="text-lg md:text-xl py-5 px-2 flex flex-col gap-2 post font-contentSans">
        <ContentSlot :use="$slots.default" />
      </div>
      <TheButton :buttonLink="buttonLink" :button-text="buttonText" />
    </div>
  </div>
</template>

<script setup>

defineProps({
  image: {
    type: String,
    default: 'Image not found'
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

const buttonText = "Go back to posts";
const buttonLink = "blog-posts";

</script>