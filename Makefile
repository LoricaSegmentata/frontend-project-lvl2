install:
	npm install

start:
	npx babel-node dist/bin/genDiff.js

build:
	rm -rf dist
	npm run build

publish:
	npm publish --dry-run

lint:
	npx eslint .
