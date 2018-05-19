/**
 * Created by f.putra on 19/05/18.
 */
let path = require('path')
let webpack = require('webpack')
let merge = require('webpack-merge')
let baseWebpackConfig = require('./webpack.config')
let webpackConfig = merge(baseWebpackConfig, {
    target: 'node',
    entry: {
        app: './src/entry-server.js'
    },
    devtool: false,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    externals: Object.keys(require('./../package.json').dependencies),
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'production'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
})
module.exports = webpackConfig