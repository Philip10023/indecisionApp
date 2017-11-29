const path = require('path')

module.exports = (env) => {
  if (process.env.NODE_ENV === 'production') {
    delete config.devtool;
    var webpack = require('webpack');
    config.plugins = [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
    ];
  }
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        test: /\.s?css$/
      }]
    },
    devtool: env ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
  }
}
