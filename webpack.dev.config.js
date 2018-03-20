const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理dist文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 分离css，打包到单独文件
const webpack = require('webpack');

const autoprefixer = require('autoprefixer'); // 自动加浏览器兼容方案, 主要是css3的兼容方案
const precss = require('precss'); // 可以让postCSS支持一些SASS的语法特性

const fs = require('fs');

const lessToJs = require('less-vars-to-js');

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './ant-default-vars.less'), 'utf8')
);

const client = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false',
      'react-hot-loader/patch',
      './src/app/index.js'
    ],
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-dom'] // 提取到单独的文件中
  },
  // 告知webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。实时重新加载
  devServer: {
    contentBase: './dist',
    port: 8080,
    inline: true,
    hot: true // 热替换
  },
  output: {
    filename: '[name].js', // 用来配置输出文件名格式
    path: path.resolve(__dirname, 'dist'), // path代表js文件输出的路径
    publicPath: '/' // 公共路径, 用来配置所有资源前面增加的路径
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 在组件热加载的时候显示更新的组件名而不是原本的组件 ID
    new webpack.HotModuleReplacementPlugin(), // 热替换
    // 指定环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    // 清理dist文件夹
    new CleanWebpackPlugin(['dist']),
    // 自动生成index.html
    new HtmlWebpackPlugin({
      title: 'react',
      favicon: path.resolve(__dirname, './src/assets/favicon.ico')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // 将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime' // 指定公共 bundle 的名称。
    }),
    new ExtractTextPlugin('styles.css') // 分离css，打包到单独文件
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        // 分离css，打包到单独文件
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: false, // 关闭css-modules功能，不然ant-design不好使
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                minimize: true // css压缩
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  precss(), // 可以让postCSS支持一些SASS的语法特性
                  autoprefixer({
                    browsers: ['last 3 version', 'ie >= 10'] // 自动添加浏览器前缀
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.less$/,
        // 分离css，打包到单独文件
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // 如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: false, // 开启css-modules功能
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                minimize: true // css压缩
              }
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: themeVariables,
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        // 分离css，打包到单独文件
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            // 如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: true, // 开启css-modules功能
                  localIdentName: '[path][name]__[local]--[hash:base64:5]', // css-modules的生成格式
                  minimize: true // css压缩
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: () => [
                    precss(), // 可以让postCSS支持一些SASS的语法特性
                    autoprefixer({
                      browsers: ['last 3 version', 'ie >= 10'] // 自动添加浏览器前缀
                    })
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        )
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
};
module.exports = client;
