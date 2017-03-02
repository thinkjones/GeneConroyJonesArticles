var path = require('path');
var webpack = require("webpack");

// Webpack Config Documentation: https://webpack.js.org/configuration/

module.exports = {
    entry: './client/webpack.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
};
