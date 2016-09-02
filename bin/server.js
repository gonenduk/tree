#!/usr/bin/env node

// Use strict mode in all project modules
'use strict';
require('use-strict');

// Place configuration and logger in global object
global.config = require('config');
global.logger = require('../modules/logger');

// Use cluster - Initialize worker instances
if (config.cluster) {
  const cluster = require('express-cluster');

  cluster(config.cluster, worker => {
    process.worker = worker;
    require('./instance');
  });

// Don't use cluster - Initialize single server instance in master process
} else {
  require('./instance');
}
