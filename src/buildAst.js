/*
[
  {
    name: 'common',
    children: [
      {
        name: 'follow',
        value: false,
        status: 'added',
      },
      {
        name: 'setting1',
        value: 'Value 1',
        status: 'unchanged',
      },
      {
        name: 'setting2',
        value: 200,
        status: 'deleted',
      },
      {
        name: 'setting3',
        value1: true,
        value2: { key: value },
        status: 'changed',
      },
      {
        name: 'setting6',
        children: [
          {
            name: 'key',
            value: 'value',
            status: 'unchanged',
          },
          {
            name: 'ops',
            value: 'vops',
            status: 'added',
          },
        ],
      }
    ],
  },
]
*/
import _ from 'lodash';

const buildAst = (config1, config2) => {
  const keys = _.union(Object.keys(config1), Object.keys(config2));

  return keys.map((key) => {
    if (!_.has(config2, key)) {
      return {
        name: key,
        value: config1[key],
        status: 'deleted',
      };
    }

    if (!_.has(config1, key)) {
      return {
        name: key,
        value: config2[key],
        status: 'added',
      };
    }

    if (config1[key] === config2[key]) {
      return {
        name: key,
        value: config1[key],
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
      value1: config1[key],
      value2: config2[key],
      status: 'changed',
    };
  });
};

export default buildAst;
