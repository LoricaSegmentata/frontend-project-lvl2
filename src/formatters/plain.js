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

const makePath = (node, pathAcc) => [...pathAcc, node.name].join('.');

const rendering = {
  deleted: (node, pathAcc) => `Property '${makePath(node, pathAcc)}' was deleted`,
  added: (node, pathAcc) => `Property '${makePath(node, pathAcc)}' was added with value: ${stringify(node.value)}`,
  changed: (node, pathAcc) => `Property '${makePath(node, pathAcc)}' was changed from ${stringify(node.oldValue)} to ${stringify(node.newValue)}`,
  parent: (node, pathAcc, render) => render(node.children, [...pathAcc, node.name]),
};

const renderDiff = (tree, pathAcc) => {
  const filtered = tree.filter((node) => node.status !== 'unchanged');

  return filtered.map((node) => rendering[node.status](node, pathAcc, renderDiff)).join('\n');
};

export default (tree) => renderDiff(tree, []);
