import fs from 'fs';
import path from 'path';
import genDiff from '../src';

test('gendiff', () => {
  const filePath = path.join(__dirname, '..', '/__fixtures__');
  const result = fs.readFileSync(`${filePath}/result.txt`, 'utf8');
  expect(genDiff(`${filePath}/before.json`, `${filePath}/after.json`)).toEqual(result);
});
