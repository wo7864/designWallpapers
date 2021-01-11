const path = require('path');

module.exports = {
    mode:'development',
    entry:"./frontend/index.js",
    output:{
        path:path.resolve(__dirname, "public"),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}