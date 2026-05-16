<template>
    <UHeader>
    <template #title>
        <img :src="isDark.value === 'dark' ? '/images/logo-dark.svg' : '/images/logo-light.svg'" alt="CGB Technical Solutions" class="h-12 w-auto cursor-pointer" @click="$router.push('/')" />
    </template>
  </UHeader>
</template>
<script setup lang="ts">
const isDark = useColorMode()
</script>