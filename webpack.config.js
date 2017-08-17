var path = require('path');

process.noDeprecation = true;

module.exports = {
  entry: {
    admin: './src/admin/index.js',
    viewer: './src/viewer/index.js'
  },
  output: {
    path: path.join(__dirname, '/public/build'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
