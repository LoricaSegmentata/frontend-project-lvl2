import yaml from 'js-yaml';
import ini from 'ini';
import fs from 'fs';
import path from 'path';

const parser = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.parse,
};

export default (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, 'utf8');
  const ext = path.extname(filePath);
  return parser[ext](content);
};
