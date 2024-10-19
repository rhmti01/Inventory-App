const path = require("path")
module.exports = {
    entry: [
        "./src/js/app.js",
        "./src/js/storage.js",
        "./src/js/categoryView.js",
        "./src/js/productView.js",
    ],
    output : {
        path : path.resolve(__dirname, "public/build/webpack")  ,
        filename : "bundle.js"
    }
}