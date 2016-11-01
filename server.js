var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.js')

new webpackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true
}).listen(8082,'localhost',function(err,result){
    if(err){
        return console.log(err)
    }

    console.log('Listening at http://localhost:8082')
})
