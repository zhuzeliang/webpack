var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: "./a.js",
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        // loaders: [{
        //     test: /.css$/,
        //     loader: 'style-loader!css-loader'
        // }]
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }

        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        port: 3060
    },
    performance: {
        hints: false
    },
   devtool: "cheap-eval-source-map"

}