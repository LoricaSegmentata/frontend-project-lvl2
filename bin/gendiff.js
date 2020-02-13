#!/usr/bin/env node

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const program = require('commander');

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.');

program.parse(process.argv);
