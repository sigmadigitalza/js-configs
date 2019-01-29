module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  printWidth: 80,
  proseWrap: "never",
  jsxBracketSameLine: true,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  endOfLine:"lf",
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
  ],
};
