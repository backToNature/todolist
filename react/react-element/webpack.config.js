const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                  'import',
                  {
                    libraryName: '@tencent/comby-lib-mobile',
                    libraryDirectory: 'components',
                    style: true // true 表示使用sass样式文件  也可以设置为'css' 表示使用css样式文件
                  }
                ]
              ]
            }
          }
        ]
      },
      {   test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015', 'react'] // es2015 处理 ES6 语法，react 处理 jsx 语法
          }
      },

      {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
              name: '[name].[ext]?[hash]'
          }
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
          loader: 'file-loader'
      },
      {
          test: /\.less$/,
          loader: "style-loader!css-loader!less-loader"
      },
      {
          test: /\.scss$/,
          loader: "style-loader!css-loader!sass-loader"
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      }
    ]
  }
}