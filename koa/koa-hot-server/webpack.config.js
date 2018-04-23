var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: ["webpack-hot-middleware/client?noInfo=true&reload=true","./src/module1.js"],
  },
  output: {
    path: path.join(__dirname, './view'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}
