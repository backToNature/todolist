var path = require('path');
var webpack = require('webpack');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var rootDir = path.dirname(__dirname);
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
      index: path.join(__dirname, './src/index.js'),
      profile: path.join(__dirname, './src/profile.js'),
      edit: path.join(__dirname, './src/edit.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
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
        query: { presets: ['env']}
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
      new cleanWebpackPlugin(['dist'], {
        root: __dirname,
        verbose: true,
        dry: false
      }),
      new CopyWebpackPlugin([
        //   {from: path.join(__dirname, './src/static'), to: path.join(__dirname, './dist/static')}
      ], {
          copyUnmodified: true
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
  devServer: {
    host: 'daringuo.qq.com',
    disableHostCheck: true,
    port: 8088,
    proxy: {
        "/api/auth": "http://daringuo.qq.com:8080"
    }
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
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
