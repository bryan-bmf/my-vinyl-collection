// Load the AWS SDK for Node.js.
var AWS = require("aws-sdk");

require("dotenv").config();

// Set the AWS Region.
AWS.config.update({
	region: "us-east-2",
	accessKeyId: process.env.AWS_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SECRET_KEY,
});

// dynamo object
var docClient = new AWS.DynamoDB.DocumentClient({
	apiVersion: "2012-08-10",
});

const getVinyls = async () => {
	//get all except aggregate
	const params = {
		TableName: "vinyls",
		FilterExpression: "#Album <> :album",
		ExpressionAttributeNames: { "#Album": "Album" },
		ExpressionAttributeValues: {
			":album": "aggregate",
		},
	};

	const result = await docClient.scan(params).promise();
	return result;
};

const getAggregate = async () => {
	const params = {
		TableName: "vinyls",
		Key: {
			"Unique ID": "ad3af481-c022-465b-8781-6c60956ea339",
			Album: "aggregate",
		},
		FilterExpression: "#Album = :album",
		ExpressionAttributeNames: { "#Album": "Album" },
		ExpressionAttributeValues: {
			":album": "aggregate",
		},
	};

	const result = await docClient.scan(params).promise();
	return result;
};

module.exports = { getVinyls, getAggregate };
