const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 分离css，打包到单独文件

const autoprefixer = require('autoprefixer'); // 自动加浏览器兼容方案, 主要是css3的兼容方案
const precss = require('precss'); // 可以让postCSS支持一些SASS的语法特性

const fs = require('fs');

const lessToJs = require('less-vars-to-js');

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, '../ant-default-vars.less'), 'utf8')
);
const rootFolder = path.resolve(__dirname, '..');
const client = {
  context: rootFolder,
  entry: {
    main: './src/app/index.js'
  },
  output: {
    filename: '[name].js', // 用来配置输出文件名格式
    path: path.resolve(__dirname, '../static/assets'), // path代表js文件输出的路径
    publicPath: '/assets/' // 公共路径, 用来配置所有资源前面增加的路径
  },
  resolve: {
    extensions: ['*', '.js', '.css', '.html'],
    modules: ['src', 'node_modules'],
    alias: {
      app: path.resolve(rootFolder, 'src/app')
    }
  },
  plugins: [
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
