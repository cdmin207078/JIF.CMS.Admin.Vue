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
    extensions: ['.js','.vue']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader', 
            options: { 
              modules: true 
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader'
      // }
    ],
  },
  devServer: {
    port: 8888,
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