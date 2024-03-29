# Mi Bellonera

A web app to catalog my vinyl collection created using React and AWS.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a catalog of my vinyl records. Collection is displayed in a grid, table, and graphs. 
Album covers are shown with some general info. On click, a Spotify modal opens so you can listen to the album.
The graphs visualize the collection's stats such as genre, languages, etc.

The backend was initially done with Node.js and Express but then decided to change it to serverless with AWS. 
	
## Technologies
Project is created with:
* [React](https://react.dev/)
* [ChakraUI](https://chakra-ui.com/)
* [React Spotify Embed](https://github.com/ctjlewis/react-spotify-embed)
* [Nivo Charts](https://nivo.rocks/)
* [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
* [AWS API Gateway](https://aws.amazon.com/api-gateway/)
* [AWS Lambda](https://aws.amazon.com/lambda/)
	
## Setup
To run this project, install it locally using npm:

```
$ cd ./client
$ npm install
$ npm start
```
