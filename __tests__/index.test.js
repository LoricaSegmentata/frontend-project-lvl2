import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

test.each([
  ['json', 'complex'],
  ['json', 'plain'],
  ['yml', 'complex'],
  ['yml', 'plain'],
  ['ini', 'complex'],
  ['ini', 'plain'],
])('gendiff %s to %s format', (ext, format) => {
  const before = getFixturePath(`before.${ext}`);
  const after = getFixturePath(`after.${ext}`);
  const result = readFile(format);

  expect(genDiff(before, after, format)).toEqual(result);
});
