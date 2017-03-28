var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + "/src/index.js", // 唯一入口文件
  output: {
    path: __dirname + "/pub", // 打包后的文件存放的地方
    filename: "index.js" // 打包后输出文件的文件名
  },
  resolve: {
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['.js', '.vue'],
    // modules: [
    //   path.join(__dirname, 'src'),
    //   "node_modules"
    // ],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
      // AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
      // AppAction : 'js/actions/AppAction.js',
      // 'src': path.resolve(__dirname, '../src'),
      'css': path.resolve(__dirname, '../src/css'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'json': path.resolve(__dirname, '../src/json'),
      // 'views': path.resolve(__dirname,'../src/view'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  devServer: {
    port: 8888,
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}


// https://segmentfault.com/a/1190000008181955 - Webpack2 升级指南和特性摘要