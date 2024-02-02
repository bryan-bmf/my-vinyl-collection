const express = require("express");

const aws = require("./aws");

const path = require('path');

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

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
	  if (err) {
		res.status(500).send(err)
	  }
	})
  })

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
