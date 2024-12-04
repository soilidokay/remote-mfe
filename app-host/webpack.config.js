
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { SetupArgShare } = require('core-mfe-module/dist/WebpackArgShared');
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
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
      name: 'host',
      remotes: {
        // ...SetupArgShare()
      },
      shared: {
        "core-mfe-module": {
          singleton: true,
          eager: true,
          requiredVersion: '^1.1.7',
        }
      }
    })
  ],
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
  },
};
