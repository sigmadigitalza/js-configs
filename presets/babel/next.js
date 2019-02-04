// nb, this preset should be included after 'next/babel
module.exports = () => ({
  presets: [
    [ "@babel/preset-flow" ],
  ],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-syntax-import-meta",
    "@babel/plugin-proposal-json-strings",
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
  ]
});
