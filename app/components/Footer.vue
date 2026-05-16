<template>
    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}, CGB Technical Solutions.<br />All rights reserved.
        </p>
      </template>
      
      <template #right>
          <UNavigationMenu :items="items" variant="link" />
      </template>
    </UFooter>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'Privacy Policy',
    href: '/privacy'
  }
]
</script>