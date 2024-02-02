const express = require("express");

const aws = require("./aws");

const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

console.log(path.join(__dirname, "../client/public/"));

app.get("/vinyls", async (req, res) => {
	const data = await aws.getVinyls();
	res.json(data);
});

app.get("/aggregate", async (req, res) => {
	const data = await aws.getAggregate();
	res.json(data);
});

app.use((req, res) => {
	res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
	res.header("Expires", "-1");
	res.header("Pragma", "no-cache");
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "build")));

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
