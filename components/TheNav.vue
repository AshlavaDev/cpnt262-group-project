<!-- This is the footer component -->
<!-- TODO 
  : add tailwind css styles
  : change Site Title
  : change Page title -->

<template>
  <header class="bg-gradient-to-l from-teal-700 via-neutral-400 to-stone-600">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/" class="font-bold lg:text-5xl">Site Title</NuxtLink>
      <ul class="flex gap-10 text-2xl">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/blog/posts">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>