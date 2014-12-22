'use strict';

var fs = require('fs'),
  _ = require('lodash');
// Load configurations
  // Set the node environment variable if not set before
  var configPath = process.cwd() + '/config/env';
  process.env.NODE_ENV = ~fs.readdirSync(configPath).map(function(file) {
    return file.slice(0, -3);
  }).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

  // Extend the base configuration in all.js with environment
  // specific configuration
 module.exports = _.extend(
    require(configPath + '/all'),
    require(configPath + '/' + process.env.NODE_ENV) || {}
  );