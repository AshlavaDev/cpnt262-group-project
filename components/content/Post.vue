<template>
  <div class="container flex justify-center min-w-full py-4">
    <div class="flex flex-col items-center max-w-screen-sm lg:max-w-screen-lg">
      <div>
        <SectionHeader :title="title" />
        <img :src="`${image}`" :alt="`${alt}`" />
      </div>
      <div class="text-lg md:text-xl py-3 px-2 flex flex-col gap-2 post">
        <ContentSlot :use="$slots.default" />
      </div>
      <NuxtLink to="/blog/posts" class="px-2 py-3 text-xl bg-slate-600 text-slate-200 border-2 border-slate-600 rounded-sm hover:bg-slate-200 hover:text-slate-200">Back to Posts</NuxtLink>
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

</script>