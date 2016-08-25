var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./index.js',

  ],
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react','es2015',]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  },
  plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
}
