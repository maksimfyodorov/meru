const configJsonPath = './src/assets/config/app.config.prod';
const fs = require('fs');
const configJson = require(configJsonPath);

try {
  const version = configJson.version.split('.').map(value => parseInt(value));

  if (version.length === 0 || version.some(value => isNaN(value))) {
    throw Error('Invalid version');
  }

  version[version.length - 1] = version.slice(-1).shift() + 1;
  configJson.version = version.join('.');
} catch (e) {
  console.log('Error', e);
  console.log('version number was\'t updated');
  return;
}

try {
  fs.writeFileSync(`${configJsonPath}.json`, JSON.stringify(configJson, null, 2));
} catch (error) {
  console.log('Error save package.json');
  console.log('Version number was\'t updated');
  return;
}
