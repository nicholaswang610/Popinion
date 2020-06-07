const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/frontend/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        publicPath:'/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/",
        historyApiFallback:true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins:['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.(png|jpg)$/,
                use: 'url-loader'
            },
            {
                test:/\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};