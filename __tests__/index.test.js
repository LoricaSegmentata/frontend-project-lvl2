import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

test('gendiff json', () => {
  const before = getFixturePath('before.json');
  const after = getFixturePath('after.json');
  const result = readFile('result.txt');
  expect(genDiff(before, after)).toEqual(result);
});

test('gendiff yaml', () => {
  const before = getFixturePath('before.yml');
  const after = getFixturePath('after.yml');
  const result = readFile('result.txt');
  expect(genDiff(before, after)).toEqual(result);
});
