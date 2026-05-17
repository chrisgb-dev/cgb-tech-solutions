<template>

    <UForm :schema="schema" :state="state" class=" mx-auto w-full" @submit="onSubmit">
        <UFormField label="Name" name="name" size="xl" hint="Required">
            <UInput v-model="state.name" placeholder="Your name" class="w-full"  />
        </UFormField>

        <UFormField label="Company" name="company" size="xl" hint="Optional">
            <UInput v-model="state.company" placeholder="Your company" class="w-full" />
        </UFormField>

        <UFormField label="Email" name="email" size="xl" hint="Required">
            <UInput v-model="state.email" type="email" placeholder="Your email" class="w-full" />
        </UFormField>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">

            <UFormField label="Time frame" name="timeframe" size="xl" hint="Optional">
                <UInput v-model="state.timeframe" placeholder="When do you need this completed?" class="w-full" />
                
            </UFormField>
    
            <UFormField label="Budget" name="budget" size="xl" hint="Optional">
                <UInput v-model="state.budget" placeholder="Your budget" class="w-full" />
            </UFormField>
        </div>

        
        <UFormField label="Project summary" name="message" size="xl" hint="Required">
            <UTextarea v-model="state.message" placeholder="Tell us about your project" class="w-full" :rows="6" />
        </UFormField>

        <input name="website" tabindex="-1" autocomplete="off">
        <NuxtTurnstile ref="turnstile" v-model="turnstileToken" />

        <UFormField class="my-6">
            <UButton :loading="loading" :disabled="!turnstileToken" type="submit" icon="i-lucide-send">Send</UButton>
        </UFormField>
    </UForm>

</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const emitter = defineEmits(['message-sent'])

const schema = z.object({
    email: z.email('Invalid email'),
    name: z.string('Name is required'),
    company: z.string().optional(),
    message: z.string('Project summary is required'),
    timeframe: z.string().optional(),
    budget: z.string().optional(),
    website: z.string().optional()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    email: undefined,
    name: undefined,
    company: undefined,
    message: undefined,
    budget: undefined,
    timeframe: undefined,
    website: undefined
})

const turnstile = ref()
const turnstileToken = ref<string | null>(null)
const serverMessage = ref<string | null>(null)
const loading = ref(false)

const toast = useToast()

function resetForm() {
    state.email = undefined
    state.name = undefined
    state.company = undefined
    state.message = undefined
    state.budget = undefined
    state.timeframe = undefined
    state.website = undefined
}

function reset() {
    turnstile.value?.reset()
  }

async function onSubmit(event: FormSubmitEvent<Schema>) {
    loading.value = true;

    const rsp = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...event.data, turnstileToken: turnstileToken.value })
    })
    loading.value = false;

    const data = await rsp.json()

    if (!rsp.ok) {
        serverMessage.value = data.message || 'Failed to send message.'
        toast.add({ title: 'Error', description: serverMessage.value, color: 'error' })
        reset()
        return
    }
    
    serverMessage.value = data.message
    
    toast.add({ title: 'Success', description: 'Message sent.', color: 'success' })
    resetForm()

    emitter('message-sent', data)
}
</script>