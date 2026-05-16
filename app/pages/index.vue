<template>
    <UContainer class="py-24">
        <Hero />

        <USeparator />
        
        <UPageSection title="What We Do" description="Practical technical solutions that drive real results.">
            <UPageGrid>
                <UCard v-for="service in services" :key="service.title">
                    <template #header>
                        <h3 class="font-semibold text-lg">
                            {{ service.title }}
                        </h3>
                    </template>

                    <p class="text-muted">
                        {{ service.description }}
                    </p>
                </UCard>
            </UPageGrid>
        </UPageSection>

        <!-- <UPageSection
            title="Problems we solve"
            description="We help businesses tackle complex technical challenges and achieve their goals."
            orientation="vertical"
            :features="features"
            /> -->


        <UPageCTA
            title="Ready to Get Started?"
            description="Let's discuss how we can help solve your toughest technical challenges."
            button-text="Contact Us"
            :links="ctaLinks"
        />

    </UContainer>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const services = [
    {
        title: 'Custom Web Applications',
        description: 'Internal tools, dashboards and operational systems.'
    },
    {
        title: 'API Development & Integrations',
        description: 'REST APIs, integrations and backend services.'
    },
    {
        title: 'Automation Systems',
        description: 'Reduce repetitive admin and connect workflows.'
    },
    {
        title: 'Technical Documentation',
        description: 'API docs, onboarding systems and developer portals.'
    },
    {
        title: 'MVP & SaaS Engineering',
        description: 'Rapid development for startups and internal ventures.'
    },
    {
        title: 'AI Solutions & Strategy',
        description: 'No hype. Just practical AI tools that solve real problems.'
    }
]

const ctaLinks = ref<ButtonProps[]>([
    {
        label: 'Contact Us',
        href: '/contact',
        color: 'primary'
    }
])

const features = ref([
    {
        title: 'Replace spreadsheets & manual processes',
        description: 'We build custom tools that automate manual work and eliminate the need for error-prone spreadsheets.'
    },
    {
        title: 'Connecting business software',
        description: 'We integrate and connect existing software systems and data sources to create seamless workflows and improve data flow across the business.'
    },
    {
        title: 'Creating client portals and operational dashboards',
        description: 'We assist businesses in creating client portals and operational dashboards to improve visibility and streamline operations.'
    },
    {
        title: 'Building APIs for existing platforms and data sources',
        description: 'We build APIs that enable seamless integration and data exchange between existing platforms and data sources.'
    },
    {
        title: 'Build documentation systems that actually get used',
        description: 'We create documentation systems that are practical, user-friendly, and actually get used by your team.'
    },
    {
        title: 'Technical Strategy & Consulting',
        description: 'We work with businesses to develop technical strategies that align with their goals and help them make informed decisions about technology investments.'
    }
])
</script>