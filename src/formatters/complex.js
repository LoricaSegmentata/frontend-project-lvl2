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

const renderDiff = (tree, depth) => {
  const rendering = {
    deleted: (node) => `${getIndent(depth - 1)}  - ${node.name}: ${stringify(node.value, depth)}`,
    added: (node) => `${getIndent(depth - 1)}  + ${node.name}: ${stringify(node.value, depth)}`,
    unchanged: (node) => `${getIndent(depth)}${node.name}: ${stringify(node.value, depth)}`,
    changed: (node) => [
      `${getIndent(depth - 1)}  - ${node.name}: ${stringify(node.value1, depth)}`,
      `${getIndent(depth - 1)}  + ${node.name}: ${stringify(node.value2, depth)}`,
    ],
    parent: (node) => `${getIndent(depth)}${node.name}: {\n${renderDiff(node.children, depth + 1)}\n${getIndent(depth)}}`,
  };
  const result = tree.map((node) => rendering[node.status](node));

  return _.flatten(result).join('\n');
};

export default (tree) => `{\n${renderDiff(tree, 1)}\n}`;
