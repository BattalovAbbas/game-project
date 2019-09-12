const path = require('path');

module.exports = {
  entry: './src/client/scripts/index.ts',
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'client-bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
