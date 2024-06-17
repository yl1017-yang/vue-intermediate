const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: () => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          __VUE_PROD_DEVTOOLS__: ['local', 'release'].includes(process.env.VUE_APP_STAGE)
        })
      ]
    }
  }
})

// https://forum.ionicframework.com/t/how-to-enable-feature-flag-for-vue-devtools/230224