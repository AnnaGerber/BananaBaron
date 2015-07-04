/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var async = require('async');
var r = require('rethinkdb');

var express = require('express');
var config = require('./config/environment');
// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);
console.log("config is", config)
// connect to db
r.connect(config.rethinkdb, function(err, conn){
  if (err) {
    console.log(err);
    return;
  }
  console.log("connected to rethinkdb", conn)
  app._rdbConn = conn;
});

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;