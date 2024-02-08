# Mi Bellonera

A web app to catalog my vinyl collection created with using React and AWS.

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
* React
* ChakraUI
* React Spotify Embed
* Nivo Charts
* AWS DynamoDB
* AWS API Gateway
* AWS Lambda
	
## Setup
To run this project, install it locally using npm:

```
$ cd ./client
$ npm install
$ npm start
```
