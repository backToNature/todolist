var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    'client/index.js'
  ],
  output: {
    path: '/',
    publicPath: 'http://localhost:8080/scripts/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}
