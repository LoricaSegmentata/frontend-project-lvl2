#!/usr/bin/env node

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const program = require('commander');

program
  .version('0.2.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(firstConfig, secondConfig);
  });

program.parse(process.argv);
