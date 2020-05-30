const path = require('path');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: glob.sync(path.resolve(process.cwd(), 'src/**/*.scss')),
    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            path.resolve(process.cwd(), 'src'),
            path.resolve(process.cwd(), 'node_modules'),
            path.resolve(process.cwd(), 'assets')
        ]
    },
    module: {
        rules: [
            {
                test: /\.[s]css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64:5]'
                            },
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.png|jpg$/,
                include: path.join(__dirname, 'assets/images'),
                loader: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, '/public/dist')],
            cleanAfterEveryBuildPatterns: [path.join(__dirname, '/public/dist', 'bundle.js')]
        }),
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
};
