<!-- This is the Card component - most of the details are just a rough draft. 
TODO:
- add tailwind css -->

<template>
  <article>
    <!-- This is the scope of the entire card -->
    
    <NuxtLink :to="info.link">
      <!-- Clickable card - card is linked to another page on click -->
      <nuxt-img preset="cover" :src="info.image" loading="lazy"/>
      <div>
        <!-- This is a container for the title and description -->
        <h3>{{ info.title }}</h3>
        <p>{{ info.description }}</p>
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

