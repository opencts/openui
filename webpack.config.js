const path = require('path');
const MiniCSSEtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist', 'client'),
        assetModuleFilename: 'assets/[hash][ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.s?css/,
                use: [
                    MiniCSSEtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(otf|ttf|eot|woff)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new MiniCSSEtractPlugin({
            filename: 'css/[name].css'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devtool: 'source-map',
    devServer: {
        port: 4300,
        progress: true,
        open: true
    }
}
