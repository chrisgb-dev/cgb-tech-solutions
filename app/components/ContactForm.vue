<template>
    
        <UForm :schema="schema" :state="state" class=" mx-auto w-full" @submit="onSubmit">
            <UFormField label="Name" name="name" size="xl">
                <UInput v-model="state.name" placeholder="Your name" class="w-full" />
            </UFormField>

            <UFormField label="Email" name="email" size="xl">
                <UInput v-model="state.email" type="email" placeholder="Your email" class="w-full" />
            </UFormField>

            <UFormField label="Message" name="message" size="xl">
                <UTextarea v-model="state.message" placeholder="Your message" class="w-full" :rows="6" />
            </UFormField>

            <UFormField class="my-6">
                <UButton type="submit">Send</UButton>
            </UFormField>
        </UForm>
    
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
    email: z.email('Invalid email'),
    name: z.string('Name is required'),
    message: z.string('Message is required')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    email: undefined,
    name: undefined,
    message: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {

    const rsp = await fetch('https://eoi1xu9akqr67xx.m.pipedream.net', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event.data)
    })

    if (!rsp.ok) {
        toast.add({ title: 'Error', description: 'Failed to send message.', color: 'error' })
        return
    }

    toast.add({ title: 'Success', description: 'Message sent.', color: 'success' })
}
</script>