import { process } from "zod/v4/core";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/turnstile'],
  css: ['~/assets/css/main.css'],
  turnstile: {
    siteKey: '',
    addValidateEndpoint: true,
  },
  runtimeConfig: {
    pbUsername: '',
    pbPassword: '',
    pbUrl: '',
    pipedreamNotificationUrl: '',
    pipedreamToken: '',
    turnstile: {
      secretKey: ''
    }
  }
})