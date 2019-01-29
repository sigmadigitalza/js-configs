if (process.env.NODE_ENV !== 'production') {
  console.log('copying over config files, this will replace existing configs.');

  const path = require('path');
  const sh = require('shelljs');

  sh.cp( path.join(__dirname, './configFiles', '.babelrc'), path.dirname(require.main.filename));
  sh.cp( path.join(__dirname, './configFiles', '.editorconfig'), path.dirname(require.main.filename));
  sh.cp( path.join(__dirname, './configFiles', '.eslintignore'), path.dirname(require.main.filename));
  sh.cp( path.join(__dirname, './configFiles', '.flowconfig'), path.dirname(require.main.filename));
  sh.cp( path.join(__dirname, './configFiles', '.prettierrc.js'), path.dirname(require.main.filename));
  sh.cp( path.join(__dirname, './configFiles', '.stylelintrc'), path.dirname(require.main.filename));

  console.log('@sigmadigital/configs installed successfully');
}
