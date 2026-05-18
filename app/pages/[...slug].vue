<template>
  <UPageSection v-if="page" :title="page.title" :headline="page.meta.headline">
    <ContentRenderer :value="page" />
  </UPageSection>
</template> 
<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {

  return queryCollection('content').path(route.path).first()
  // if (route.path.startsWith('/posts')) {
  //   return queryCollection('content').path(route.path).first()
  // } else {
  //   return queryCollection('content').path(route.path).first()
  // }
})
</script>