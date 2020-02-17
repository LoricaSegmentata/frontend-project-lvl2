import yaml from 'js-yaml';

const parser = {
  '.json': (content) => JSON.parse(content),
  '.yaml': (content) => yaml.safeLoad(content),
};

export default (content, ext) => parser[ext](content);
