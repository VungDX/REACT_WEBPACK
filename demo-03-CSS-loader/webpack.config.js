const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']

            }
        ]
    }
};