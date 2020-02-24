#!/usr/bin/env node

import program from 'commander';
import genDiff from '..';
import pkg from '../../package.json';

program
  .version(pkg.version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(genDiff(firstConfig, secondConfig, program.format));
  });

program.parse(process.argv);
