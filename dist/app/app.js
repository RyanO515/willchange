'use strict';

var express = require('express');
var app = express();
var greeter = require('./greeter.js');

app.get('/', function (req, res) {
	res.send(greeter());
});

app.listen(process.env.PORT || 3000, function () {
	console.log("App is up!");
});

// to compile all files to Heroku compatible syntax before
//    pushing to Heroku, enter in the command line:

// babel app/*.js -d dist

// terminal response:       app/app.js     -> dist/app/app.js
//                          app.greeter.js -> dist/app/greeter.js

// vvv----- See package.json ----vvv

// included "start" and "build"

// "start" - tells heroku to use compiled JS code in dist folder instead of the es6 app folder

// "build" - used locally - use npm run build and runs babel command to update compiled JS code in dist folder