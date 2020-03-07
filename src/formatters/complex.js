import _ from 'lodash';

const getIndent = (depth) => '    '.repeat(depth);

const stringify = (item, depth) => {
  if (!_.isObject(item)) {
    return item;
  }

  const keys = Object.keys(item);
  const result = keys.map((key) => `${getIndent(depth + 1)}${key}: ${item[key]}`).join('\n');

  return `{\n${result}\n${getIndent(depth)}}`;
};

const rendering = {
  deleted: (node, depth) => `${getIndent(depth - 1)}  - ${node.name}: ${stringify(node.value, depth)}`,
  added: (node, depth) => `${getIndent(depth - 1)}  + ${node.name}: ${stringify(node.value, depth)}`,
  unchanged: (node, depth) => `${getIndent(depth)}${node.name}: ${stringify(node.value, depth)}`,
  changed: (node, depth) => [
    `${getIndent(depth - 1)}  - ${node.name}: ${stringify(node.oldValue, depth)}`,
    `${getIndent(depth - 1)}  + ${node.name}: ${stringify(node.newValue, depth)}`,
  ],
  parent: (node, depth, render) => `${getIndent(depth)}${node.name}: {\n${render(node.children, depth + 1)}\n${getIndent(depth)}}`,
};

const renderDiff = (tree, depth) => {
  const result = tree.map((node) => rendering[node.status](node, depth, renderDiff));

  return _.flatten(result).join('\n');
};

export default (tree) => `{\n${renderDiff(tree, 1)}\n}`;
