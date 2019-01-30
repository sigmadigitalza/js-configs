// @TODO: these should not be tasks that autorun, this should be the work of a basic CLI
if (process.env.NODE_ENV !== 'production') {
  console.log('copying over config files, this will replace existing configs.');

  const path = require('path');
  const sh = require('shelljs');

  sh.cp( path.join(__dirname, './configFiles', '.babelrc'), path.join(__dirname, '../../../'));
  sh.cp( path.join(__dirname, './configFiles', '.editorconfig'), path.join(__dirname, '../../../'));
  sh.cp( path.join(__dirname, './configFiles', '.eslintignore'), path.join(__dirname, '../../../'));
  sh.cp( path.join(__dirname, './configFiles', '.flowconfig'), path.join(__dirname, '../../../'));
  sh.cp( path.join(__dirname, './configFiles', '.prettierrc.js'), path.join(__dirname, '../../../'));
  sh.cp( path.join(__dirname, './configFiles', '.stylelintrc'), path.join(__dirname, '../../../'));

  console.log('@sigmadigital/configs installed successfully');
}
