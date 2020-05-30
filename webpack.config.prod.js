const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/client/index.react.js',
    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'bundle.js',
        publicPath: '/'
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.[s]css$/,
                use: [
                    { loader: 'style-loader' },
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
            cleanOnceBeforeBuildPatterns: ['dist']
        }),
        new UglifyJSPlugin()
    ]
};
