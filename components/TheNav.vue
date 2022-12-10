<!-- This is the footer component -->

<template>
    <nav class="container mx-auto py-4 px-8 flex justify-between items-center font-headerDisplay bg-gradient-to-r from-gray-100 to-gray-300 min-w-full ">
      <NuxtLink to="/" class="font-bold lg:text-5xl">Labyritronics</NuxtLink>
      <ul class="flex gap-10 text-2xl">
        <li class="hover:text-gray-300 hover:bg-black px-2"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="hover:text-gray-300 hover:bg-black px-2"><NuxtLink to="/about">About</NuxtLink></li>
        <li class="hover:text-gray-300 hover:bg-black px-2"><NuxtLink to="/blog/posts">Blog</NuxtLink></li>
      </ul>
    </nav>
</template>