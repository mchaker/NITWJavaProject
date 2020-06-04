const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = () => {
    const dev = process.env.NODE_ENV === 'development' ? true : false;
    return {
        mode: process.env.NODE_ENV,
        entry: {
            main: './view/index.js'
        },
        module: {
            rules: [
                { test: /\.(jpg|svg)$/, use: 'url-loader' },
                { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
                { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                inject: true,
                template: 'public/index.html',
                minify: {
                    removeComments: true,
                    ...dev ? {} : {
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.css',
                chunkFilename: '[id].css'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    'public/logo192.png',
                    'public/logo512.png'
                ]
            })
        ].concat(dev ? [] : [
            new BabelMinifyPlugin({
                mangle: {
                    topLevel: true
                }
            })
        ]),
        devtool: dev ? 'eval-source-map' : false,
        stats: {
            cachedAssets: false,
            colors: true,
            entrypoints: false,
            modules: false
        },
        watch: dev ? true : false,
        watchOptions: {
            ignored: /node_modules/
        },
        optimization: {
            ...dev ? {} : {
                concatenateModules: true,
                minimizer: [
                    new UglifyJsPlugin({
                        cache: true,
                        parallel: true,
                        uglifyOptions: {
                            output: {
                                comments: false
                            }
                        }
                    }),
                    new OptimizeCSSPlugin({})
                ]
            }
        },
        output: {
            filename: '[name].js',
            path: __dirname + '/api/resources/static'
        }
    }
}
