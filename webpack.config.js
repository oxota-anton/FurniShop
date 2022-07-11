const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/script.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/js')
    },
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    module: {}
}