'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  rethinkdb: {
    host: '',
    port: 28015,
    authKey: 'dummy',
    db: 'bananabaron'
  },

  seedDB: true
};
