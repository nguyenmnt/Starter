const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var webpackConfig = {
    entry: {
        main: './src/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'src', 'dist'),
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
    devServer: {
      writeToDisk: true
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
    ]
};

module.exports = webpackConfig;