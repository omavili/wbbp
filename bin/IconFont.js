// const options = require('./options');
var exec = require('child_process').exec;

var fontConfig = [
  `src/assets/images/icons/*.svg`,
  '--font-name iconfont',
  `-d src/assets/fonts/iconfont`,
  `-t src/assets/styles/base/icons/_icons.scss.njk`,
  `-s src/assets/styles/base/icons`,
  '-c icon',
  '-p ../fonts/iconfont',
  '--centerHorizontally',
  '--normalize',
];

exec(`mkdirp src/fonts/iconfont`);
exec('webfont ' + fontConfig.join(' '));

// Command example:
// npm run compile:icons -- --cartridge=app_custom_core
