// Load the AWS SDK for Node.js.
var AWS = require("aws-sdk");

// Set the AWS Region.
AWS.config.update({ region: "us-east-2" });

// dynamo object
var docClient = new AWS.DynamoDB.DocumentClient({
	apiVersion: "2012-08-10",
});

const getVinyls = async () => {
	const params = {
		TableName: "vinyls",
	};
	
	const result = await docClient.scan(params).promise();
	return result;
};

module.exports = { getVinyls };
