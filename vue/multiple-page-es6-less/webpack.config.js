var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var shell = require('shelljs');
// 默认把webpack.config放在根目录
var rootDir = path.dirname(__dirname);

module.exports = {
  entry: {
      vendor: ['vue'],
      content: path.join(rootDir, './extension/content/index.js'),
      background: path.join(rootDir, './extension/background/index.js'),
      '/list/list': path.join(rootDir, './extension/page/list.js'),
      '/dialog/dialog': path.join(rootDir, './extension/page/dialog.js')
  },
  output: {
    path: path.resolve(rootDir, '../dist/extension'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2017', 'es2016', 'es2015']}
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=12000&name=images/[hash:8].[name].[ext]'
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
          test: /\.less$/,
          loader: "style-loader!css-loader!less-loader"
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({name: 'vendor', chunks: ['/list/list', '/dialog/dialog']}),
      new cleanWebpackPlugin(['dist/extension'], {
        root: path.resolve(rootDir, '../'),
        verbose: true,
        dry: false
      })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  performance: {
    hints: false
  },
  devtool: 'cheap-module-source-map'
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
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
    
    
    // console.log(production_manifest);
}
