import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers';

const genDiff = (pathToFile1, pathToFile2) => {
  const fullPathToFile1 = path.resolve(process.cwd(), pathToFile1);
  const fullPathToFile2 = path.resolve(process.cwd(), pathToFile2);

  const fileContent1 = fs.readFileSync(fullPathToFile1, 'utf8');
  const fileContent2 = fs.readFileSync(fullPathToFile2, 'utf8');

  const fileExt1 = path.extname(pathToFile1);
  const fileExt2 = path.extname(pathToFile2);

  const config1 = parse(fileContent1, fileExt1);
  const config2 = parse(fileContent2, fileExt2);

  const keys = _.union(Object.keys(config1), Object.keys(config2));
  const result = keys.reduce((acc, key) => {
    if (!_.has(config2, key)) {
      return [...acc, `  - ${key}: ${config1[key]}`];
    }
    if (!_.has(config1, key)) {
      return [...acc, `  + ${key}: ${config2[key]}`];
    }

    return config1[key] === config2[key]
      ? [...acc, `    ${key}: ${config1[key]}`]
      : [...acc, `  - ${key}: ${config1[key]}`, `  + ${key}: ${config2[key]}`];
  }, []).join('\n');

  return `{\n${result}\n}`;
};

export default genDiff;
