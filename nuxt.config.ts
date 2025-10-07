export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],

  // ⚙️ Caminhos CSS (você pode manter ./ ou ~)
  css: ['~/assets/main.css', '~/assets/css/tailwind.css'],

  vite: {
    resolve: {
      alias: {
        '~': '/home/lucas/fenil/fenil-app',
        '@': '/home/lucas/fenil/fenil-app',
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Lora', provider: 'google', weights: [400, 500, 600, 700], styles: ['normal', 'italic'] },
    ],
  },

  app: {
    head: {
      title: 'Fenil - De amador a máquina de vendas',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Instale um funil com IA em 30 dias. Marketing + CRM + Vendedores IA' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
