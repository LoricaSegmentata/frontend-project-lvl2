import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

test.each(['json', 'yml', 'ini'])('gendiff %s', (ext) => {
  const before = getFixturePath(`before.${ext}`);
  const after = getFixturePath(`after.${ext}`);
  const result = readFile('result.txt');
  expect(genDiff(before, after)).toEqual(result);
});
