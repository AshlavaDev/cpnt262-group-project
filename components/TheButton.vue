<template>

  <NuxtLink :to="{ name: buttonLink }" class="px-2 py-3 my-3 text-xl
  bg-slate-600 text-slate-200 border-2 border-slate-600 rounded-sm hover:bg-slate-200 hover:text-slate-600">
    {{ buttonText }}
  </NuxtLink>

</template>

<script setup>
defineProps({
  buttonText: {
    type: String,
    default: "Button"
  },
  buttonLink: {
    type: String,
    default: "/"
  }
})
</script>