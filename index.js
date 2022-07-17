#!/usr/bin/env node

import cli from 'commander';

cli
  .description('Access the JSON Placeholder API')
  .name('jsonp');

cli.parse(process.argv);
