// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: ['@/assets/styles.scss'],
  
  app: {
    head: {
      title: 'Philippe Ledoit - Developer, Finance & Data Professional',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio of Philippe Ledoit - Developer specializing in web development, finance, and data science. Building modern applications with Vue.js, Nuxt.js, and Python.'
        },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'Philippe Ledoit - Developer, Finance & Data Professional' },
        {
          property: 'og:description',
          content: 'Portfolio of Philippe Ledoit - Developer specializing in web development, finance, and data science.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
})
