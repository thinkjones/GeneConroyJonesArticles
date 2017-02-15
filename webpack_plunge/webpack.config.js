var path = require('path');

// Webpack Config Documentation: https://webpack.js.org/configuration/

module.exports = {
    entry: './client/app/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    }
}
