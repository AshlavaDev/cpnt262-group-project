<template>
  <AppHead :title="pageTitle" />
   <SectionHeader :title="pageTitle" class="bg-aboutHero text-8xl md:text-10xl"/>
    <AppMain>
      <AppContent :content="aboutContent" />
    </AppMain>
</template>

<script setup>

const pageTitle = "About Us";

const aboutContent = [
  "At Labyritronics, we are all about robots, computers, and artificial intelligence. Whether it is exploring the potential uses of emerging technologies, or looking at how those technologies can impact society, we take an interest in what is being developed.",
  "Through our blog, read our musing on how the technology is being used in public. The authors, sometimes with some help from the very technology they write about, discuss their findings on artificial intelligence and its ramifications both good and bad."
]

</script>