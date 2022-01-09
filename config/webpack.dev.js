const path = require("path");

const mode =
    process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
    entry: {
        main: ["./src/main.js"],
    },
    mode: mode,
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
    },
    devServer: {
        static: "./dist",
    },
};
