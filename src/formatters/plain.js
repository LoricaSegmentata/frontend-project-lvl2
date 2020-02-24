import _ from 'lodash';

const stringify = (item) => {
  if (item instanceof Object) {
    return '[complex value]';
  }
  if (typeof item === 'string') {
    return `'${item}'`;
  }
  return item;
};

const renderPlainDiff = (tree) => {
  const iter = (node, propertyPath) => {
    const result = node.map((n) => {
      const newPath = [...propertyPath, n.name];
      const str = {
        deleted: `Property '${newPath.join('.')}' was deleted`,
        added: `Property '${newPath.join('.')}' was added with value: ${stringify(n.value)}`,
        unchanged: '',
        changed: `Property '${newPath.join('.')}' was changed from ${stringify(n.value1)} to ${stringify(n.value2)}`,
      };

      if (_.has(n, 'children')) {
        return iter(n.children, newPath);
      }
      return str[n.status];
    });

    return _.flatten(result).filter((v) => v !== '').join('\n');
  };

  return iter(tree, []);
};

export default renderPlainDiff;
