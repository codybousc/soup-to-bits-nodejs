

'use strict';

var redis = require('../lib/redis');  //goes up to lib directory to require
//this allows us to share this one 'client' with all others who need it

//Saves badges to database
//@param badges = array
//@param callback = function
//we take in a badges array and pass a callback to the function
exports.save = function(badges, callback) {
  //if zero halt execution and return callback
  if (!badges.length) return callback(null, null);
  //pops of first badge and pushes it to array
  var badge = badges.pop();
  redis.lpush('badges', JSON.stringify(badge), function(err) {
    if (err) return callback(err, null);
    //recurssion to continue calling until there are no more badges
    exports.save(badges, callback);
  });
};
