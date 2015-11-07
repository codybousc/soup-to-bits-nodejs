'use strict';

var express = require('express'); //is a function

var app = express(express.json); //global middleware. expects json and parses if it meets certain criteria
var badges = require('./controllers/badges'); //requires a file

app.post('/', badges.save, badges.send, function(req, res) {
  res.send('\nDone\n\n'); 
});

app.listen(8000);
