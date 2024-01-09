// Load the AWS SDK for Node.js.
var AWS = require("aws-sdk");
const fs = require('fs');
// Set the AWS Region.
AWS.config.update({ region: "us-east-2" });

// Create DynamoDB service object.
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

const params = {
	// Specify which items in the results are returned.
	//   FilterExpression: "Subtitle = :topic AND Season = :s AND Episode = :e",
	//   // Define the expression attribute value, which are substitutes for the values you want to compare.
	//   ExpressionAttributeValues: {
	//     ":topic": {S: "SubTitle2"},
	//     ":s": {N: 1},
	//     ":e": {N: 2},
	//   },
	// Set the projection expression, which are the attributes that you want.
	//   ProjectionExpression: "Season, Episode, Title, Subtitle",
	TableName: "vinyls",
};

let res = [];

ddb.scan(params, function (err, data) {
	if (err) {
		console.log("Error", err);
	} else {
		console.log("Success", data.Count);
		
		data.Items.forEach(function (element, index, array) {
			//convert dynamo json to regular json
			let unmarshalled = AWS.DynamoDB.Converter.unmarshall(element)
			res.push(unmarshalled)
		});

		fs.writeFile('Output.txt', JSON.stringify(res), (err) => {
 
			if (err) throw err;
		})
	}
});
