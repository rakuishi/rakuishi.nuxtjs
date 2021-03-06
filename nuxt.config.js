module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "rakuishi.nuxtjs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//fonts.googleapis.com/css?family=Roboto:400,700"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/github.min.css"
      }
    ]
  },
  css: [
    "@/assets/css/normalize.css",
    "@/assets/css/skeleton.css",
    "@/assets/css/custom.css"
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#1EAEDB" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
