const WebpackDevServer = require('webpack-dev-server'),
    path = require('path'),
	webpack = require('webpack'),
	common = require('../webpack.config.js'),
    host = process.env.HOST || 'localhost',
    port = process.env.PORT || 4000,
	compiler = webpack(Object.assign(common, {
        entry:[
            'webpack-dev-server/client?http://'+host+':'+port,
            'webpack/hot/dev-server',
            './src/app.js'
        ]
	})),

    open = require('open'),
	devServerOptions = Object.assign({}, common.devServer, {
        hot: true,
        contentBase: path.join(__dirname, "/"),
        publicPath: "/",
        stats:{
            colors: true
        },
        historyApiFallback: true,
        watchOptions: {
            poll: true
        },
        watchContentBase: true,
	});
const server = new WebpackDevServer(compiler, devServerOptions).listen(process.env.PORT || 4000,'localhost', function(){
    open('http://localhost:' + process.env.PORT || 4000);
})
