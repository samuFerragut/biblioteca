import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Jovent',
    title: 'Biblioteca',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module',{ fix: true }],
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/auth-next',
    '@nuxtjs/dayjs',
  ],
  // auth: {
  //   // Options
  //   redirect: {
  //     login: '/',
  //     logout: '/',
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: '/mg/authentication',
  //           method: 'post',
  //           propertyName: 'data.accessToken',
  //         },
  //         logout: {
  //           url: '/mg/authentication',
  //           method: 'delete',
  //           propertyName: 'data.accessToken',
  //         },
  //         user: { url: '/mg/users/', method: 'get' },
  //       },
  //       tokenRequired: true,
  //       tokenType: 'Bearer',
  //       globalToken: true,
  //       autoFetchUser: true,
  //     },
  //   },
  // },
  dayjs: {
    locales: ['es'],
    defaultLocale: 'es',
    defaultTimeZone: 'Europe/Madrid',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone', // import 'dayjs/plugin/timezone'
    ], // Your Day.js plugin
  },
  router: {
    middleware: [],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Content-Type: 'application/json',
    // baseURL: 'http://localhost:3030'
    // credentials: true
    proxy: true,
  },
  proxy: {
    '/mg/': {
      // pathRewrite: { '^/mg/': '' }
      target: 'http://localhost:3030/',
      pathRewrite: { '^/mg/': '' },
    },
    // '/mysql/': {
    //   target: 'http://localhost:3031',
    //   pathRewrite: { '^/mysql/': '' },
    // },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isclient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
}
