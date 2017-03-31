var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js','.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
        loader: 'url-loader'
      }
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader'
      // }
    ],
  },
  devServer: {
    port: 8889,
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}