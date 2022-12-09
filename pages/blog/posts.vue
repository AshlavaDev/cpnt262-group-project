<template>
  <AppHead :title="pageTitle" />
  <SectionHeader :title="pageTitle" />
  <AppMain>
    <AppSection>
      <ContentList path="/blog" v-slot="{ list }">
        <CardGrid>
          <AppCard v-for="article in list" :key="article._path"
            :info="{
              title:article.excerpt.children[0].props.title,            
              description:article.excerpt.children[0].props.description,
              image:article.excerpt.children[0].props.image,
              alternate:article.excerpt.children[0].props.alt,
              link:article._path
            }"
            />
        </CardGrid>
      </ContentList>
    </AppSection>
  </AppMain>
</template>

<script setup>

const pageTitle = "Blog";

</script>