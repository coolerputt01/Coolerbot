const { defineConfig } = require('@vue/cli-service')
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Cooler Bot',
    themeColor: '#000',
    manifestOptions: {
      background_color: '#000'
    },
    onfigureWebpack: {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/"], // Add your routes
        })
      ]
    },
    workboxOptions: {
      skipWaiting: true
    }
  }
})
