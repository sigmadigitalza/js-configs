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
```

### Install
you can either just install this package:
```bash
npm install --save-dev @sigmadigital/configs
```

or alternatively, install this package with all its dependencies with the following commands.

```bash
npm install --save-dev @babel/cli@">=7.0.0" @babel/core@">=7.0.0" eslint@">=5" jest@">=24" prettier@">=1.16.1" flow-bin@">=0.91" @sigmadigital/configs 

npm install --save @babel/polyfill@">=7.0.0"
```


## Example Scripts
it will be useful to add these to the scripts section of your `package.json` (example uses yarn, swap this npm if you prefer):

```json
{
  "scripts": {
        "lint": "yarn run lint:js && yarn run lint:scss",
        "lint:js": "eslint \"assets/js/**\"",
        "lint:scss": "stylelint \"assets/scss/*.scss\"",
        "codestyle": "yarn run codestyle:fix && yarn run codestyle:prettier",
        "codestyle:fix": "yarn run codestyle:fix:js && yarn run codestyle:fix:scss",
        "codestyle:fix:js": "eslint --fix \"assets/**/*.js\"",
        "codestyle:fix:scss": "stylelint \"assets/**/*.scss\" --fix",
        "codestyle:prettier": "yarn run codestyle:prettier:js && yarn run codestyle:prettier:scss",
        "codestyle:prettier:js": "prettier --write \"assets/**/*.js\"",
        "codestyle:prettier:scss": "prettier --write \"assets/**/*.scss\""
  }
}
```

## Use At Your Own Risk
While this is openly available and licensed under MIT, we have developed it solely for our own purposes, and provide zero warranties, or guarantees of any kind.

## Contributing
If you find a bug, have a suggestion, or would like to contribute, head on over the issues section on the github repo.
