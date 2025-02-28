const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js', //It lists different modules that can be loaded from the Products project
      exposes: {
        './ProductsIndex': './src/bootstrap', // check explanation in cart webpack.config.js file 
      },
      shared: ['faker']
      /* shared: {
        faker: {
          singleton: true,
        }
      } */
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
