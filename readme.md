# Configs
this is specifically a single importable npm package that centralises our common configs for javascript development, including:

* eslint
* babel
* prettier
* stylelint

It also contains basic config files, that should be placed in the root of the project when installed.

## Get Started
While your project will require some root dependencies to be installed, this package should vastly simplify the rather arduous task of setting this up and maintaining these configs across multiple projects.

### Requirements
```bash
  #devDependencies
   @babel/cli@">= 7.0.0"
   @babel/core@">= 7.0.0"
   eslint@">= 5"
   jest@">= 24"
   prettier@">= 1.16.1"
   flow-bin@">= 0.91"
   
   # dependencies
   @babel/polyfill@">= 7.0.0"
   @babel/runtime@">= 7.3"
```

### Install
you can either just install this package:
```bash
npm install --save-dev @sigmadigital/configs
```

or alternatively, install this package with all its dependencies with the following commands.

```bash
npm install --save-dev @babel/cli@">=7.0.0" @babel/core@">=7.0.0" eslint@">=5" jest@">=24" prettier@">=1.16.1" flow-bin@">=0.91" @sigmadigital/configs 

npm install --save @babel/polyfill@">=7.0.0"  @babel/runtime@">= 7.3"
```

### Config files
If config files don't exist, they will be added to the project root, alternatively, you can use the following presets:

```js
// .babelrc
@sigmadigital/configs/presets/babel

// .babelrc (next JS after babel/next)
@sigmadigital/configs/presets/babel/next

// .stylelintrc
@sigmadigital/configs/presets/stylelint

// .eslint.json
@sigmadigital/eslint-config-kitchensink

// .prettierrc.js 
module.exports = require('@sigmadigital/configs/presets/prettier');

```

you can inspect the default project config files that should be used in the root in the **./configFiles** directory.


## Example Scripts
it will be useful to add these to the scripts section of your `package.json`:

```json
{
  "scripts": {
    "lint": "npm run lint:js && npm run lint:scss",
    "lint:js": "eslint \"assets/js/**\"",
    "lint:scss": "stylelint \"assets/scss/*.scss\"",
    "codestyle": "npm run codestyle:fix && npm run codestyle:prettier",
    "codestyle:fix": "npm run codestyle:fix:js && npm run codestyle:fix:scss",
    "codestyle:fix:js": "eslint --fix \"assets/**/*.js\"",
    "codestyle:fix:scss": "stylelint \"assets/**/*.scss\" --fix",
    "codestyle:prettier": "npm run codestyle:prettier:js && npm run codestyle:prettier:scss",
    "codestyle:prettier:js": "prettier --write \"assets/**/*.js\"",
    "codestyle:prettier:scss": "prettier --write \"assets/**/*.scss\""
  }
}
```

## Use At Your Own Risk
While this is openly available and licensed under MIT, we have developed it solely for our own purposes, and provide zero warranties, or guarantees of any kind.

## Contributing
If you find a bug, have a suggestion, or would like to contribute, head on over the issues section on the github repo.
