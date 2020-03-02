import path from 'path';
import fs from 'fs';
import parse from './parsers';
import buildAst from './buildAst';
import render from './formatters/index';

const readFile = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, 'utf8');
  return content;
};

const genDiff = (filePath1, filePath2, format = 'complex') => {
  const content1 = readFile(filePath1);
  const content2 = readFile(filePath2);

  const ext1 = path.extname(filePath1);
  const ext2 = path.extname(filePath2);

  const config1 = parse(ext1, content1);
  const config2 = parse(ext2, content2);

  const ast = buildAst(config1, config2);

  return render(ast, format);
};

export default genDiff;
