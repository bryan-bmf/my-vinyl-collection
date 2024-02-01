const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "./public/index.html"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "./public/index.html"),
		}),
	],
};
