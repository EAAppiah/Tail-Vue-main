// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss','nuxt-icon',
  ],

  css: [],

  app: {
    head: {
      title: 'Tail-Vue',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'A random web app project'
        }
      ]
    }
  }
})

