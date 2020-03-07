import _ from 'lodash';

const stringify = (item) => {
  if (!_.isObject(item) && !_.isString(item)) {
    return item;
  }
  if (_.isString(item)) {
    return `'${item}'`;
  }

  return '[complex value]';
};

const renderDiff = (tree, pathAcc) => {
  const rendering = {
    deleted: (node) => `Property '${[...pathAcc, node.name].join('.')}' was deleted`,
    added: (node) => `Property '${[...pathAcc, node.name].join('.')}' was added with value: ${stringify(node.value)}`,
    changed: (node) => `Property '${[...pathAcc, node.name].join('.')}' was changed from ${stringify(node.oldValue)} to ${stringify(node.newValue)}`,
    parent: (node) => renderDiff(node.children, [...pathAcc, node.name]),
  };
  const filtered = tree.filter((node) => node.status !== 'unchanged');

  return filtered.map((node) => rendering[node.status](node)).join('\n');
};

export default (tree) => renderDiff(tree, []);
