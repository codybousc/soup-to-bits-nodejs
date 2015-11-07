'use strict';
var _ = require('underscore');
var model = require('../models/badges'); //we're in a directory, so the double .. jumps us out



//Send badges to model to be saved
//next is a function that says i'm done with this action go to the next one. in this case send()
exports.save = function(req, res, next) {
  var badges = _.clone(req.body);//clone method from underscorejs that returns a deep copy of the req.body object
  model.save(badges, function(err) {
    if (err)
    return res.json(503, { error: true});
    next();
  });
};

//Send badges to pub/sub socket in model
exports.send = function(req, res, next) {
  next(); 

};
