<template>
  <main>
    <ContentList path="/blog" v-slot="{ list }">
      <div class="flex gap-4 justify-center">
        <AppCard v-for="article in list" :key="article._path"
          :info="{
            title:article.excerpt.children[0].props.title,            
            description:article.excerpt.children[0].props.description,
            image:article.excerpt.children[0].props.image,
            alternate:article.excerpt.children[0].props.alt,
            link:article._path
          }"
        />
      </div>
    </ContentList>
  </main>
</template>
