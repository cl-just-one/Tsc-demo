const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
console.log("---------------", __dirname);

// 使用node的模块
module.exports = {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    // 入口文件
    entry: "./src/index.ts",
    output: {
        filename: "main.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    // 去掉错误 Entrypoint undefined = index.html
    // stats: {
    //     children: false
    // },
    // 配置对指定文件的处理
    // 匹配后缀为ts和tsx的文件
    // 使用exclude排除不处理的文件
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
    devServer: {
        // 本地开发环境基于那个问价夹作为目录
        contentBase: "./dist",
        // 错误在控制台打印
        stats: "errors-only",
        // 不启动压缩
        compress: false,
        host: "localhost",
        port: 8081
    },
    // 插件配置
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["./dist"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/template/index.html"
        })
    ]
}