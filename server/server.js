// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Initialize Express
var app = express();
var port = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");
var axios = require("axios");

// Require all models
var db = require("./models");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/techcrunchscraper", {
  useMongoClient: true
});