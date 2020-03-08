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

const getFileType = (filePath) => {
  const ext = path.extname(filePath);
  return ext.slice(1);
};

const genDiff = (filePath1, filePath2, format = 'complex') => {
  const content1 = readFile(filePath1);
  const content2 = readFile(filePath2);

  const type1 = getFileType(filePath1);
  const type2 = getFileType(filePath2);

  const config1 = parse(type1, content1);
  const config2 = parse(type2, content2);

  const ast = buildAst(config1, config2);

  return render(ast, format);
};

export default genDiff;
