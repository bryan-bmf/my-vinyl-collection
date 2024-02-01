const express = require("express");

const aws = require("./aws");

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

app.get("/vinyls", async (req, res) => {
	const data = await aws.getVinyls();
	res.json(data);
});

app.get("/aggregate", async (req, res) => {
	const data = await aws.getAggregate();
	res.json(data);
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
