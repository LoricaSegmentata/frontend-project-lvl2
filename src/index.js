import _ from 'lodash';
import parse from './parsers';

const genDiff = (filePath1, filePath2) => {
  const config1 = parse(filePath1);
  const config2 = parse(filePath2);

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
