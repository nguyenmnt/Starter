const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'src', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader', 
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader' },
            {
                test: /\.scss$/,
                use: ['to-string-loader', 'css-loader', 'sass-loader'],
              },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}