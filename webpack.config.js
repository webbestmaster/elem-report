const path = require('path');

const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer'); // eslint-disable-line no-unused-vars

const {
    pathToStaticFileFolder,
    isDevelopment,
    isProduction,
    pathToDist,
    cwd,
    isBuildServer,
} = require('./webpack/config');

const webpackConfig = {
    entry: ['./www/css/root.scss', './www/js/root.js'],
    // entry: ['./extract/extract.js'],
    output: {
        path: path.join(cwd, pathToDist),
        publicPath: `${isDevelopment || isBuildServer ? '' : pathToStaticFileFolder}/`,
        // filename: isDevelopment ? '[name].js' : '[name].[hash:6].js',
        filename: 'main.js',
        chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[hash:6].chunk.js',
    },

    devtool: isProduction ? false : 'source-map',
    optimization: require('./webpack/setting/optimization').optimization,
    module: {rules: require('./webpack/setting/module/rules').rules},
    resolve: {alias: require('./webpack/setting/resolve/alias').alias},
    plugins: require('./webpack/setting/plugins').plugins,
    devServer: require('./webpack/setting/dev-server').devServer,
};

// webpackConfig.plugins.push(new BundleAnalyzerPlugin());

module.exports = webpackConfig;
