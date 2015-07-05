/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var data = require('./states.json');
// Get list of things
exports.index = function(req, res) {
  // randomly choose 3 actions and two events
  var result = {events:[],actions:[]}
  console.log("choosing 3 from " + data.events.length)
  console.log("choosing 2 from " + data.actions.length)
  var ev = [], evidx;
  for (var i = 0; i<1; i++) {
    evidx = Math.floor(Math.random() * data.events.length);
    if (ev.indexOf(evidx) == -1){
      ev.push(evidx);
      result.events.push(data.events[evidx]);
    }
  }
  var ac = [], acidx;
  for (var i = 0; i<3; i++) {
    acidx = Math.floor(Math.random() * data.actions.length);
    if (ac.indexOf(acidx) == -1){
      ac.push(acidx);
      result.actions.push(data.actions[acidx]);
    }
  }
  res.json(result);
};