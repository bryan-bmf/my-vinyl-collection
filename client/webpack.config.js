const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "./src/index.tsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	devServer: {
        historyApiFallback: true
     },
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, "./public/index.html"),
			filename: "index.html"
		}),
	],
};
