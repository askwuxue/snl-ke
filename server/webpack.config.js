const path = require('path');
// TODO 解决node系统模块无法编译的问题
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './src/server.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.js',
        libraryTarget: "umd"
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
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {   
                // TODO 对css进行处理，使用file-loader是无法处理css的。只是对所有文件的一个简单处理
                test: /\.css$/,
                use: [
                    'css-loader'
                ]
            },
            {
                // test: /\.(svg|png|gpg|css)$/,
                test: /\.(svg|png|gpg)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        // TODO 要求webpack找不到拓展名按照下面的规则去找
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "@": path.resolve(__dirname, "../web/src"),
            "~": path.resolve(__dirname, "src/configs")
        }
    }
}