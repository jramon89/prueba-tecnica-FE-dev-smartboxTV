const common = require('../webpack.config.js'),
      merge = require('webpack-merge'),
      webpack = require('webpack'),
      UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: true,
                warnings: false,
                drop_console: true
            },
        }),
    ]
});