// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss','nuxt-icon','@sidebase/nuxt-pdf'
  ],
  css: [],

  app: {
    head: {
      title: 'Tail-Vue',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'A random web app project'
        }
      ],
    }
  },

  plugins: [
    // ...
    { src: '~/plugins/flowbite.client.ts', mode: 'client' },
  ],
})

