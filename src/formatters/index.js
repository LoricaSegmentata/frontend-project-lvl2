import renderComplexDiff from './complex';
import renderPlainDiff from './plain';

const formatter = {
  complex: renderComplexDiff,
  plain: renderPlainDiff,
};

export default (ast, format) => formatter[format](ast);
