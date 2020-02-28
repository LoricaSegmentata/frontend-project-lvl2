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
### Output
* Default (step 3)

[![asciicast](https://asciinema.org/a/fw8W666i7TgGq3E37vZQF3vqz.svg)](https://asciinema.org/a/fw8W666i7TgGq3E37vZQF3vqz)

* Default (step 5)

[![asciicast](https://asciinema.org/a/KvovC6dP4uZRMwH1F9oEg1MvC.svg)](https://asciinema.org/a/KvovC6dP4uZRMwH1F9oEg1MvC)

* Default (step 6)

[![asciicast](https://asciinema.org/a/MmeAJsNWH1dXi7jqyBMbe8jWY.svg)](https://asciinema.org/a/MmeAJsNWH1dXi7jqyBMbe8jWY)

* Default (step 7)

[![asciicast](https://asciinema.org/a/gm8bXJiZoyvzmOfPSRIrKdkaS.svg)](https://asciinema.org/a/gm8bXJiZoyvzmOfPSRIrKdkaS)

* Plain (step 8)

[![asciicast](https://asciinema.org/a/jWAT8IrXXhP3Ly9B0RPG1PRVR.svg)](https://asciinema.org/a/jWAT8IrXXhP3Ly9B0RPG1PRVR)

* JSON (step 9)

[![asciicast](https://asciinema.org/a/vXgmB0h0SpdszXuDKDJLDZAr9.svg)](https://asciinema.org/a/vXgmB0h0SpdszXuDKDJLDZAr9)