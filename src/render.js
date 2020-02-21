import _ from 'lodash';

const getIndent = (depth) => '    '.repeat(depth);

const stringify = (item, depth) => {
  if (item instanceof Object) {
    const keys = Object.keys(item);
    const result = keys.map((key) => `${getIndent(depth + 1)}${key}: ${item[key]}`).join('\n');
    return `{\n${result}\n${getIndent(depth)}}`;
  }
  return item;
};

const render = (tree) => {
  const iter = (node, depth) => {
    const result = node.map((n) => {
      const str = {
        deleted: `${getIndent(depth - 1)}  - ${n.name}: ${stringify(n.value, depth)}`,
        added: `${getIndent(depth - 1)}  + ${n.name}: ${stringify(n.value, depth)}`,
        unchanged: `${getIndent(depth)}${n.name}: ${stringify(n.value, depth)}`,
        changed: [
          `${getIndent(depth - 1)}  - ${n.name}: ${stringify(n.value1, depth)}`,
          `${getIndent(depth - 1)}  + ${n.name}: ${stringify(n.value2, depth)}`,
        ],
      };

      if (_.has(n, 'children')) {
        return `${getIndent(depth)}${n.name}: ${iter(n.children, depth + 1)}`;
      }
      return str[n.status];
    });

    return `{\n${_.flatten(result).join('\n')}\n${getIndent(depth - 1)}}`;
  };

  return iter(tree, 1);
};

export default render;
