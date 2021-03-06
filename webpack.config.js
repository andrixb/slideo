const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NamedModulesPlugin = new Webpack.NamedModulesPlugin();
const NoEmitOnErrorsPlugin = new Webpack.NoEmitOnErrorsPlugin();
const HotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin();

const extractCSS = new ExtractTextPlugin('[name].main.css');
const extractSCSS = new ExtractTextPlugin('[name].styles.css');


const config = {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React
        'webpack-dev-server/client?http://localhost:8080',
        // // bundle the client for webpack-dev-server
        // // and connect to the provided endpoint
        //
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './src/index.jsx',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost/',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-2'],
                },
            },
            {
                test: /\.s(a|c)ss$/,
                loader: extractSCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                }),
            },
        ],
    },
    plugins: [
        extractCSS,
        extractSCSS,
        NamedModulesPlugin,
        NoEmitOnErrorsPlugin,
        HotModuleReplacementPlugin
    ],

    devtool: 'inline-source-map',
    devServer: {
        publicPath: 'http://localhost:8080/',
        inline: true,
        // hot: true,
        watchContentBase: true,
        port: 8080,
        historyApiFallback: true,
        stats: {
            colors: true,
        },
    },
};

module.exports = config;
