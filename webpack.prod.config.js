module.exports = {
    mode: 'production',
    entry: './src/fig-viewer.js', 
    output: {
        path: __dirname + '/lib',
        filename: 'fig-viewer.js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                // 拡張子 .js の場合
                test: /\.js$/,
                use: [
                    {
                        // Babel を利用する
                        loader: "babel-loader",
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // プリセットを指定することで、ES2020 を ES5 に変換
                                "@babel/preset-env",
                            ],
                        },
                    },
                ],
            },
        ],
    },
};
