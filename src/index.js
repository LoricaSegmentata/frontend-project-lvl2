import parse from './parsers';
import buildAst from './buildAst';
import render from './formatters/index';

const genDiff = (filePath1, filePath2, format = 'complex') => {
  const config1 = parse(filePath1);
  const config2 = parse(filePath2);
  const ast = buildAst(config1, config2);

  return render(ast, format);
};

export default genDiff;
