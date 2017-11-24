//dist对应的物理地址（就是磁盘地址：D:\\...\等这样的）

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const distAbsolutePath=path.resolve(__dirname,'../dist')
console.log('dist物理地址',distAbsolutePath)
console.log('入口地址',path.resolve(__dirname,'../src/js/main.js'))

module.exports = {
    entry: path.resolve(__dirname,'../src/js/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'aa.html',
            template: 'src/index.html'  //以哪个为模板
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:['file-loader']
            },
            // {
            //     test:/\.(jpg|png|gif|jpeg)$/,
            //     use:[{
            //         loader:'url-loader',
            //         options:{
            //             limit:10000
            //         }
            //     }]
            // }
            {
                test:/\.(eot|svg|ttf|woff|woff2|otf)$/,
                use:['file-loader']
            }
        ]
    },
    devServer:{
        open:true,
    }
};