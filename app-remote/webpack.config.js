
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: 'auto'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'analytics',  // Tên ứng dụng remote
      exposes: {
        './RemoteApp': './src/App',
      },
      filename: "remoteEntry.js",
      shared: {
        "core-mfe-module": {
          shareScope: 'default'
        }
      }
    })
  ],
  devServer: {
    static: './dist',
    port: 3001,
    hot: true,
  },
};
