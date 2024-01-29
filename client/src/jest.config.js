module.exports = {
	preset: "ts-jest",
    testEnvironment: "jsdom",
	transform: {
		"^.+\\.(js|jsx)$": "babel-jest",
		"\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/fileTransformer.js",
	},
	transformIgnorePatterns: [
		"<rootDir>/node_modules/",
	],
};