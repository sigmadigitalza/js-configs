module.exports = () => ({
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [
            "> 1%",
            "last 4 versions",
            "safari >= 7"
          ],
          node: "8.11.3"
        },
        useBuiltIns: "usage"
      }
    ],
    [ "@babel/preset-react" ],
    [ "@babel/preset-flow" ],
    [ "minify" ]
  ],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-json-strings",
    "@babel/plugin-proposal-decorators",
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
  ]
});
