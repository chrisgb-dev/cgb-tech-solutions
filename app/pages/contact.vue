<template>
        <UPageSection
            v-if="!formSubmitted"
            title="Contact us"
            description="If your business needs custom software solutions that actually get used, let's talk. We build internal tools, dashboards, client portals, integrations and automation systems that are tailored to how your business actually works and solve real problems for your team."
            orientation="horizontal">

        <ContactForm @message-sent="handleMessageSent" />
    </UPageSection>
    <UPageSection v-else 
        title="Thank you!" description="Your message has been sent. We'll get back to you as soon as possible.">
    </UPageSection>
</template>
<script setup lang="ts">

const formSubmitted = ref(false);
const messageTitle = ref('');
const messageDescription = ref('');
const messageError = ref(false)

async function handleMessageSent(formData: any) {
    if (formData.status !== 200) {
        messageTitle.value = 'Error sending message'
        messageDescription.value = 'There was an error sending your message. Please try again later.'
        messageError.value = true
        
    } else {
        messageTitle.value = 'Message sent'
        messageDescription.value = 'Thank you for reaching out! We will get back to you as soon as possible.'
        messageError.value = false
    }

    formSubmitted.value = true
}
</script>