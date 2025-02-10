module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true
  },
  extends: [
    "airbnb-base",
    "plugin:jest/all"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["jest"],
  rules: {
    "max-classes-per-file": "off",
    "no-underscore-dangle": "off",
    "no-console": "off",
    "no-shadow": "off",
    "no-restricted-syntax": [
      "error",
      "LabeledStatement",
      "WithStatement"
    ],
    "indent": ["error", 2],  // Enforce 2-space indentation
    "quotes": ["error", "single"], // Enforce single quotes
    "semi": ["error", "always"],  // Require semicolons
    "comma-dangle": ["error", "never"], // No trailing commas
    "eol-last": ["error", "always"] // Ensure a newline at the end of the file
  },
  overrides: [
    {
      files: ["*.js"],
      excludedFiles: "babel.config.js"
    }
  ]
};
