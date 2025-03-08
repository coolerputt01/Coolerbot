const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Cooler Bot',
    themeColor: '#000',
    manifestOptions: {
      background_color: '#000'
    },
    workboxOptions: {
      skipWaiting: true
    }
  }
})
