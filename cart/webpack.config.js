const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                // './CartShow': './src/index' // as we loaded our html directly from index we exposed it
                './CartShow': './src/bootstrap' // but not we are exporting mount function from bootstrap so we are exposing it and container will use it to import mount function
            },
            shared: ['faker'] // should be used to share faker library between products and cart project
            /* shared: {
                faker: {
                    singleton: true
                }
            } */ // this way of defining singleton, makes faker library loads only once into our container and if we are using different version of faker like 4.1.0 and 5.1.0 then we might get warning in console that different version of faker is being loaded so we have to handle that and make our projects compatible with any one version of faker library

            // Browser console warning:
            // Unsatisfied version 5.1.0 from products of shared singleton module faker (required ^4.1.0)
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}