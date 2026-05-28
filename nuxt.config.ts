import { process } from "zod/v4/core";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/turnstile', '@nuxt/content', '@nuxtjs/seo', 'nuxt-umami'],
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
  }, 
  site: {
    url: 'https://cgbtechsolutions.com.au',
    name: 'CGB Tech Solutions',
  },
  seo: {
    meta: {
      // Basic SEO
      title: 'CGB Tech Solutions - Custom Software Development',
      description: 'CGB Tech Solutions is a software development company specializing in custom web and mobile applications, cloud solutions, and IT consulting services. We help businesses leverage technology to achieve their goals.',
      author: 'Chris Gardiner-Bill',

      // Theme & Color
      themeColor: [
        { content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
      colorScheme: 'dark light',

      // Social Media
      // twitterCreator: '@CGBTechSolutions',
      // twitterSite: '@CGBTechSolutions',

      // App Info
      applicationName: 'CGB Tech Solutions',

      // Nuxt SEO Utils already sets the below tags for you
      ogSiteName: 'CGB Tech Solutions',
      ogLocale: 'en_AU',
      ogType: 'website',
      ogUrl: 'https://cgbtechsolutions.com.au',
      ogTitle: 'CGB Tech Solutions - Custom Software Development',

      // Other Nuxt SEO modules handle these
      ogImage: '/cgb-logo-icon-only.png',
      robots: 'index, follow',
    },
  },
  umami: {
    id: "29b0a41c-1856-4276-b1ac-3dd58618bcae",
    host: "https://cloud.umami.is",
    autoTrack: true,
    ignoreLocalhost: true
  },
})