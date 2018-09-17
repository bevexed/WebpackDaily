# webpack
1. 快速初始化npm
> npm init -y
2. 创建项目根目录
> src
3. 创建打包目录
> dist
4. 在src下创建index首页
> src > index.html
5. 在src下创建main.js文件//打包入口文件
> src > index.js
6. 安装webpack //4.0以后用来打包
> npm i webpack -D
7. 安装webpack-cli//4.0以后的命令行
> npm i webpack-cli -D
8. 新建webpack配置文件
> webpack.config.js
```
module.export = {
    entry: './src/index.js', //入口文件
    mode: "development", //development production
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
}
```
9. 在package.json中配置webpack
```
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
```
10. 安装webpack-dev-server (自动刷新打包文件)
```
npm i webpack-dev-server
```
配置webpack-dev-server(生成的main.js文件常驻内存，看不见的)
> "dev": "webpack-dev-server --open --hot --progress --host --mode development",
