const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const rootDir = path.dirname(__dirname);
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    vendor: ['vue', 'element-ui', 'jquery', 'vue-router'],
    'vendor-m': ['vue', 'vue-router'],
    index: path.join(__dirname, './src/index.js'),
    'lazy-load': path.join(__dirname, './src/lazy-load.js')
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
        query: { presets: ['env'] }
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
  optimization: {
    splitChunks: {
      name: true
    }
  },
  plugins: [
    new cleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ],
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.optimization.minimize = true;

  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
