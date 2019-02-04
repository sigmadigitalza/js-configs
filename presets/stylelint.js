module.exports = {
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-prettier/recommended"
  ],
  rules: {
    "prettier/prettier": true,
    "no-descending-specificity": [true, {
      "severity": "warning"
    }],
    "no-duplicate-selectors": [true, {
      "severity": "warning"
    }],
    "declaration-block-no-duplicate-properties": [true, {
      "severity": "warning"
    }],
    "block-no-empty": [true, {
      "severity": "warning"
    }],
    "no-empty-source": null,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'double',
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "extend",
          "at-root",
          "debug",
          "warn",
          "error",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "function"
        ]
      }
    ]
  }
};
