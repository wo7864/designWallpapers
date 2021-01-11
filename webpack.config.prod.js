const path = require('path');

module.exports = {
    mode:'production',
    entry:"./frontend/index.js",
    output:{
        path:path.resolve(__dirname, "public"),
        filename: 'index_bundle.js'
    }
}