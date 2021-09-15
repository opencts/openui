const path = require('path');
const NodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode,
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, 'dist', 'server'),
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
                        ],
                        plugins: [
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                }
            }
        ]
    },
    externalsPresets: {
        node: true
    },
    externals: [NodeExternals()],
    devtool: 'source-map',
    plugins: [
        new NodemonPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'server', 'public'), to: path.resolve(__dirname, 'dist', 'server') }
            ]
        })
    ]
}