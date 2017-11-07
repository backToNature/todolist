const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const rootDir = path.dirname(__dirname);
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      index: path.join(__dirname, './src/index.ts'),
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
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
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   use: [
      //     'file-loader',
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //           quality: 65
      //         },
      //         optipng: {
      //           enabled: false,
      //         },
      //         pngquant: {
      //           quality: '65-90',
      //           speed: 4
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         },
      //         // the webp option will enable WEBP
      //         webp: {
      //           quality: 75
      //         }
      //       }
      //     }
      //   ]
      // },
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
      },
      {
          test: /\.html$/,
          loader: "ejs-compiled-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
      }
    ]
  },
  plugins: [
      new cleanWebpackPlugin(['dist'], {
        root: __dirname,
        verbose: true,
        dry: false
      }),
      new HtmlWebpackPlugin({
        template: '!!ejs-compiled-loader!src/index.html',
        filename: 'index.html',
        inject: true,
        cache: false
      }),
      new webpack.HotModuleReplacementPlugin()
      // new CopyWebpackPlugin([
      //     {from: path.join(__dirname, './src/static'), to: path.join(__dirname, './dist/static')},
      // ], {
      //     copyUnmodified: true
      // })
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
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
