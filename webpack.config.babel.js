import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import autoprefixer from 'autoprefixer'

export default {
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map', // for debug purposes on production
    stats: {
        colors: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{ loader: 'html-loader', options: { minimize: true } }]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use:  [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    {
                        loader: 'postcss-loader',
                        options: { ident: 'postcss' }
                    },
                    'sass-loader']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'Fonts/',
                        publicPath: '../Fonts/'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
                                                        
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new CleanWebpackPlugin()
    ],
    mode: "development",
        devServer: {
                contentBase: './dist',
                inline: true,
                port: 3000
        }
}