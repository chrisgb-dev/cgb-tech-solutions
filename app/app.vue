<template>
  <UApp>
    <UMain>
      <NuxtLayout>
        <Navbar />
        <NuxtPage />
        <Footer />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
<script setup lang="ts">
umTrackView().then((res: any) => console.log(res.ok));
</script>
