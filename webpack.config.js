const path = require("path")
module.exports = {
    entry: [
        "./public/build/babel/app.js",
        "./public/build/babel/storage.js",
        "./public/build/babel/categoryView.js",
        "./public/build/babel/productView.js",
    ],
    output: {
        path: path.resolve(__dirname, "public/build/webpack"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },]
    }
}