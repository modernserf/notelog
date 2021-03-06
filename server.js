"use strict"

var path = require("path")
var webpack = require("webpack")
var config = require("./webpack.config")
var DevServer = require("webpack-dev-server")

var dist = path.join(process.cwd(), "/dist")

var devServer = new DevServer(webpack(config), {
    contentBase: dist,
    hot: true,
    historyApiFallback: true,
})

devServer.listen(8080)
