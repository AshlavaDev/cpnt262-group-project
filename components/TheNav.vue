<!-- This is the footer component -->
<!-- TODO 
  : add tailwind css styles
  : change Site Title
  : change Page title 
  : use v-for for nav bar links instead-->

<template>
  <header>
    <nav>
      <nuxt-link to="/">Site Title</nuxt-link>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>