import { process } from "zod/v4/core";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/turnstile',
    '@nuxt/content'
  ],
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
  },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      wrangler: {
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'cgb-technical-solutions',
            database_id: 'fbdd840e-b6c4-4713-909f-b4f5088a5857'
          }
        ]
      },
    },
  }
})