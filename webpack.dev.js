const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        port: 3001,
        disableHostCheck: true
    }
});