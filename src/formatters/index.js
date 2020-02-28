import renderComplexDiff from './complex';
import renderPlainDiff from './plain';

const formatter = {
  complex: renderComplexDiff,
  plain: renderPlainDiff,
  json: JSON.stringify,
};

export default (ast, format) => formatter[format](ast);
