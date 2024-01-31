const express = require("express");

const aws = require("./aws");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/vinyls", async (req, res) => {
	const data = await aws.getVinyls();
	res.json(data);
});

app.get("/aggregate", async (req, res) => {
	const data = await aws.getAggregate();
	res.json(data);
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
