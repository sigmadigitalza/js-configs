module.exports = () => ({
  presets: [
    [
      require("@babel/preset-env"),
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
    [ require( "@babel/preset-react") ],
    [ require("@babel/preset-flow") ],
    [ require("minify") ]
  ],
  plugins: [
    require("@babel/plugin-syntax-dynamic-import"),
    require("@babel/plugin-syntax-import-meta"),
    require("@babel/plugin-proposal-class-properties"),
    require("@babel/plugin-proposal-json-strings"),
    [
      require("@babel/plugin-proposal-decorators"),
      {
        "legacy": true
      }
    ],
   require("@babel/plugin-proposal-function-sent"),
   require("@babel/plugin-proposal-export-namespace-from"),
   require("@babel/plugin-proposal-numeric-separator"),
   require("@babel/plugin-proposal-throw-expressions"),
  ]
});
