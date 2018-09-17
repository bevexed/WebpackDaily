const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html '),
    filename: "index.html"
})

//向外暴露一个打包的配置文件
module.export = {
    mode: "production", //development production
    entry: './src/index.js', //入口文件
    output: { //输出位置
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    plugins: [
        htmlPlugin
    ]
}