<template>
    <UPageHero headline="CGB Tech Solutions" title="Custom Web Applications & API Development"
        description="We build internal tools, integrations, automation systems and business web applications for businesses that need software tailored to how they actually work."
        :links="links">
    </UPageHero>
</template>
<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
    {
        label: 'Contact Us',
        to: '/contact',
        trailingIcon: 'i-lucide-arrow-right'
    },
    // {
    //     label: 'CTA 2',
    //     to: '/',
    //     color: 'neutral',
    //     variant: 'subtle',
    //     trailingIcon: 'i-lucide-arrow-right'
    // }
])

</script>