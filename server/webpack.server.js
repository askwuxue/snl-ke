const path = require('path');
// TODO 解决node系统模块无法编译的问题
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './src/server.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js'
    },
    // 设置编译后使用的环境
    target: "node",
    externals: [
        webpackNodeExternals()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
}