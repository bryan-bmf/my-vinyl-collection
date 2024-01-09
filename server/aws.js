// Load the AWS SDK for Node.js.
var AWS = require("aws-sdk");

// Set the AWS Region.
AWS.config.update({ region: "us-east-2" });

// Create DynamoDB service object.
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

const params = {
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
	}
});
