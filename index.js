#!/usr/bin/env node

import cli from 'commander';

cli
  .description('Access the JSON Placeholder API')
  .name('jsonp')
  .usage('<command>')
  .addHelpCommand(false)
  .helpOption(false);

cli.parse(process.argv);
