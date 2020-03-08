import _ from 'lodash';

const makeIndent = (depth) => '    '.repeat(depth);

const stringify = (item, depth) => {
  if (!_.isObject(item)) {
    return item;
  }

  const keys = Object.keys(item);
  const result = keys.map((key) => `${makeIndent(depth + 1)}${key}: ${item[key]}`).join('\n');

  return `{\n${result}\n${makeIndent(depth)}}`;
};

const rendering = {
  deleted: (node, depth) => `${makeIndent(depth - 1)}  - ${node.name}: ${stringify(node.value, depth)}`,
  added: (node, depth) => `${makeIndent(depth - 1)}  + ${node.name}: ${stringify(node.value, depth)}`,
  unchanged: (node, depth) => `${makeIndent(depth)}${node.name}: ${stringify(node.value, depth)}`,
  changed: (node, depth) => [
    `${makeIndent(depth - 1)}  - ${node.name}: ${stringify(node.oldValue, depth)}`,
    `${makeIndent(depth - 1)}  + ${node.name}: ${stringify(node.newValue, depth)}`,
  ],
  parent: (node, depth, render) => `${makeIndent(depth)}${node.name}: {\n${render(node.children, depth + 1)}\n${makeIndent(depth)}}`,
};

const renderDiff = (tree, depth) => {
  const result = tree.map((node) => rendering[node.status](node, depth, renderDiff));

  return _.flatten(result).join('\n');
};

export default (tree) => `{\n${renderDiff(tree, 1)}\n}`;
