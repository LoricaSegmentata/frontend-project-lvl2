# Gendiff
It's the second project on Hexlet Frontend JavaScript course.

Gendiff is the CLI utility, which compares two configuration files and showing a difference.

[![Maintainability](https://api.codeclimate.com/v1/badges/a6217faa155aae4f1a49/maintainability)](https://codeclimate.com/github/Deim-Sha/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a6217faa155aae4f1a49/test_coverage)](https://codeclimate.com/github/Deim-Sha/frontend-project-lvl2/test_coverage)
[![Node CI](https://github.com/Deim-Sha/frontend-project-lvl2/workflows/Node%20CI/badge.svg)](https://github.com/Deim-Sha/frontend-project-lvl2/actions)

## Install
Clone this repository, then run following command in repository folder:
`make install-gendiff`

## Usage
Gendiff supports .json, .yml and .ini formats.
```
Usage: gendiff [options] <firstConfig> <secondConfig>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format [type]  output format
  -h, --help           output usage information
```
### Complex format
[![asciicast](https://asciinema.org/a/gm8bXJiZoyvzmOfPSRIrKdkaS.svg)](https://asciinema.org/a/gm8bXJiZoyvzmOfPSRIrKdkaS)
### Plain format
[![asciicast](https://asciinema.org/a/jWAT8IrXXhP3Ly9B0RPG1PRVR.svg)](https://asciinema.org/a/jWAT8IrXXhP3Ly9B0RPG1PRVR)