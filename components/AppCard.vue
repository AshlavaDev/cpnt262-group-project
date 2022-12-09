<!-- This is the Card component - most of the details are just a rough draft. 
TODO:
- add tailwind css -->

<template>
  <article class="bg-slate-100 rounded-lg shadow-md w-96 cursor-pointer origin-center hover:origin-top-right">
    <!-- This is the scope of the entire card -->
    
    <NuxtLink :to="info.link">
      <!-- Clickable card - card is linked to another page on click -->
      <img preset="cover" :src="info.image" loading="lazy" class="block w-full h-80 object-cover"/>
      <div class="p-12">
        <!-- This is a container for the title and description -->
        <h3 class="text-3xl font-medium mb-4">{{ info.title }}</h3>
        <p class="text-xl">{{ info.description }}</p>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    default() {
      return {
        title: "Topic Title",
        description: "Topic description",
        image: "image source",
        alternate: "image alt",
        link: "page link", // This links to the page dedicated to that card
      };
    },
  },
});
</script>

