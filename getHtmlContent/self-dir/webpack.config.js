var path = require('path')
var webpack = require('webpack')
var cleanWebpackPlugin = require('clean-webpack-plugin')
// 默认把webpack.config放在根目录

module.exports = {
  entry: {
    browser: path.join(__dirname, './browser/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    libraryTarget: "umd",
    library: "GetContent"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(['public/dist'], {
      verbose: true, // logs
      dry: false, // Use boolean 'true' to test/emulate delete
      exclude: ['public/lib']
    })
  ],
  performance: {
      hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
