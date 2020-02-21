import parse from './parsers';
import buildAst from './buildAst';
import render from './render';

const genDiff = (filePath1, filePath2) => {
  const config1 = parse(filePath1);
  const config2 = parse(filePath2);
  const ast = buildAst(config1, config2);

  return render(ast);
};

export default genDiff;
