//dist对应的物理地址（就是磁盘地址：D:\\...\等这样的）
// const distAbsolutePath = path.resolve(__dirname, '../dist')
// console.log('dist物理地址', distAbsolutePath)
// console.log('入口地址', path.resolve(__dirname, '../src/js/main.js'))

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    entry: { entry: './fe/src/js/main.js' },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'assets/js/[name].[hash:8].js',
        //所有资源的基础路径，而且一定是 / 结尾
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'fe/src/tpl.ejs'  //以哪个为模板
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    //可写在babelrc文件里
                    // options: {
                    //     presets: ['react','env'],
                    //     plugins:['transform-object-rest-spread']
                    // }
                }],
                // exclude:[path.resolve(__dirname, 'node_modules')]//可节省时间，大小变得更小
            },
            // 模块化
            //  {
            //     test: /\.css$/,
            //      use: ['style-loader',
            //          {
            //             loader: 'css-loader',
            //             options: {
            //                 module: true,
            //             localIdentName:'[name]-[local]-[hash:base64:6]'
            //            }
            //         }  
            //     ],
            //     exclude:[
            //         path.resolve(__dirname, 'node_modules'),
            //     ]
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // include:[
                //     path.resolve(__dirname, 'node_modules'),
                // ]
            },
            // {
            //     test: /\.scss$/,
            //      use: ['style-loader',
            //          {
            //             loader: 'css-loader',
            //             options: {
            //                 module: true,
            //             localIdentName:'[name]-[local]-[hash:base64:6]'
            //            }
            //         },
            //         'sass-loader'
            //     ],
            //     exclude:[
            //         path.resolve(__dirname, 'node_modules'),
            //     ]
            // },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                // include:[
                //     path.resolve(__dirname, 'node_modules'),
                // ]
            },
            // {
            //     test:/\.scss$/,//支持css模块化
            //     use:['style-loader','css-loader','sass-loader']
            // },
            // {
            //     test: /\.(jpg|png|gif|jpeg)$/,
            //     use:['file-loader']
            // },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/img/[name]_[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/font/[name]_[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        open: true,
        contentBase: '../src',
        publicPath: '/'
    }
};