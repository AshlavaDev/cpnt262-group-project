<template>
  <h1 class="text-center text-6xl md:8xl py-4">Blog Title Page With Posts</h1>
  <main>
    
    <ContentList path="/blog" v-slot="{ list }" class="flex flex-col gap-4">
      <div v-for="article in list" :key="article._path" class="flex flex-col gap-4">
        <div class="flex flex-col items-center gap-2">
          <NuxtLink :to="article._path" class="text-xl p-4 bg-slate-600 text-white rounded hover:bg-slate-100 hover:text-slate-600 border-2 border-solid border-slate-600">

            <img :src="`${article.excerpt.children[0].props.image}`" :alt="`${article.excerpt.children[0].props.alt}`" />
            <h4 class="text-4xl text-center py-2">{{ article.excerpt.children[0].props.title}}</h4>
            <p class="text-xl text-center">{{ article.excerpt.children[0].props.description}}</p>
            
          </NuxtLink>
        </div>
      </div>
    </ContentList>
  </main>
</template>
