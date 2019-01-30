const path = require('path');
const sh = require('shelljs');

// check if there is a backup directory, and if so
// move the existing file there.
const addConfigFileToRoot = fileName => {

  // check if file exists
  if (sh.test('-f', path.join(__dirname, '../../../', fileName))) {
    console.log(`skiped adding ${fileName} to root as ${fileName} already exists`);
    return;
  }

  // otherwise create new
  sh.cp( path.join(__dirname, './configFiles', fileName), path.join(__dirname, '../../../'));
};

// for each string in the array, call addConfigFileToRoot
const addListOfConfigFilesToRoot = filesArr => filesArr.map(f => addConfigFileToRoot(f));


// @TODO: these should not be tasks that autorun, this should be the work of a basic CLI
if (process.env.NODE_ENV !== 'production') {
  console.log('copying over config files, this will replace existing configs.');

  const configs = [
    '.babelrc',
    '.eslintrc.json',
    '.editorconfig',
    '.eslintignore',
    '.flowconfig',
    '.prettierrc.js',
    '.stylelintrc',
  ];

  addListOfConfigFilesToRoot(configs);

  console.log('@sigmadigital/configs installed successfully');
}
