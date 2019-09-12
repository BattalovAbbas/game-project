const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/index.ts',
  target: 'node',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'server-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
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
  plugins: [ new NodemonPlugin() ],
  externals: [ nodeExternals() ]
};
