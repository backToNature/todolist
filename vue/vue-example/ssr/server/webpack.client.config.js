const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, './src/entry-client.js'),
  optimization: {
    splitChunks: {
      // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
      // 以便可以在之后正确注入异步 chunk。
      // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
      cacheGroups: {
        commons: {
          name: "manifest",
          minChunks: Infinity
        }
      }
    }
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin()
  ]
})