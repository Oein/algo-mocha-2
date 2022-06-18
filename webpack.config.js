module.exports = {
    mode: "production",

    // 엔트리 파일 경로
    entry: "./src/react/index.tsx",

    // 빌드 결과물을 dist/react/main.js에 위치
    output: {
        filename: "main.js",
        path: __dirname + "/dist/react/",
    },

    // 디버깅을 위해 빌드 결과물에 소스맵 추가
    devtool: "source-map",

    resolve: {
        // 파일 확장자 처리
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            // .ts .tsx
            { test: /\.tsx?$/, loader: "ts-loader" },

            //
            // .css
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            //
            // .ttf
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                },
            },
        ],
    },

    devServer: {
        hot: true,
        static: __dirname + "/",
        devMiddleware: {
            writeToDisk: true,
        },
    },

    plugins: [],

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
