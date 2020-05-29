const path = require('path');

module.exports = {
    entry: "./src/js/frontend/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
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
                        presets: ['@babel/preset-env', '@babel/react'],
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
            }
            
        ]
    }
};