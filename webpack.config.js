var webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8082',
        'webpack/hot/only-dev-server',
        './entry.jsx'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.jsx?$/,
            // loaders: ['react-hot-loader/webpack'] //'babel'
            loaders: ['babel'] //'babel'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by xiwang'),
        new webpack.HotModuleReplacementPlugin()
    ],
    node: {
        fs: 'empty'
    }
}
