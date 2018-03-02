const path = require('path');

module.exports = {
    //define entry point
    entry: "./src/main.js",
    //define output point
    output: {
        path: path.resolve('./public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
           
    ]
    }
}