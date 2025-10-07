// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],

  // CSS de entrada (use caminho relativo do Nuxt)
  css: ["/assets/main.css", "/assets/css/tailwind.css"],

  // PostCSS aqui (sem postcss.config.js)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // @nuxt/fonts
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Lora', provider: 'google', weights: [400, 500, 600, 700], styles: ['normal', 'italic'] },
    ],
    // opcional: display: 'swap'
  },

  app: {
    head: {
      title: 'Fenil - De amador a máquina de vendas',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Instale um funil com IA em 30 dias. Marketing + CRM + Vendedores IA' },
      ],
      // use um ícone em /public/favicon.ico ou ajuste o path para algo sob /public
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
