var path = require('path');

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
        port: 9000
    }
};
