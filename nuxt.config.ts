export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.scss',
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: [
  ],
  
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  
  generate: {
    routes: ['/'],
  },
});