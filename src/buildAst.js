import _ from 'lodash';

const stringify = (item) => {
  if (item instanceof Object) {
    const keys = Object.keys(item);
    return keys.reduce((acc, key) => ({ ...acc, [key]: stringify(item[key]) }), {});
  }

  return typeof item === 'number' ? String(item) : item;
};

const buildAst = (config1, config2) => {
  const keys = _.union(Object.keys(config1), Object.keys(config2)).sort();

  return keys.map((key) => {
    if (!_.has(config2, key)) {
      return {
        name: key,
        value: stringify(config1[key]),
        status: 'deleted',
      };
    }

    if (!_.has(config1, key)) {
      return {
        name: key,
        value: stringify(config2[key]),
        status: 'added',
      };
    }

    if (config1[key] === config2[key]) {
      return {
        name: key,
        value: stringify(config1[key]),
        status: 'unchanged',
      };
    }

    if (config1[key] instanceof Object && config2[key] instanceof Object) {
      return {
        name: key,
        children: buildAst(config1[key], config2[key]),
      };
    }

    return {
      name: key,
      value1: stringify(config1[key]),
      value2: stringify(config2[key]),
      status: 'changed',
    };
  });
};

export default buildAst;
