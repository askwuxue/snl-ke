// TODO webpack的文件名是webpack.config.js 而不是webpack-config.js
const path = require('path');
module.exports = {
    entry: "../web/src/App.js",
    // TODO 默认browser
    target: "node",
    output: {
        // TODO 输出成Node环境中可以使用的模块化
        libraryTarget: "umd",
        path: path.resolve(__dirname, "build"),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                }
            },
            {
                test: /.(svg|png|ico|txt|css)$/,
                use: {
                    loader: "file-loader"
                }
            }
        ]
    },

}