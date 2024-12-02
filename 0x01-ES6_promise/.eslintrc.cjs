module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true, // Assuming you're using Jest for testing
  },
  extends: [
    'airbnb-base', // Using the Airbnb base style guide
    'plugin:jest/all', // Jest plugin for test-related linting
    'plugin:prettier/recommended', // Integrates Prettier formatting with ESLint
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018, // Set ECMAScript version
    sourceType: 'module', // To support ES6 modules
  },
  plugins: ['jest', 'prettier'], // Add Prettier plugin to use with ESLint
  rules: {
    'no-console': 'off', // Allow console statements
    'no-shadow': 'off', // Disable the no-shadow rule
    'no-restricted-syntax': [
      'error',
      'LabeledStatement', // Restrict labeled statements
      'WithStatement', // Restrict the "with" statement
    ],
    'prettier/prettier': ['error', { singleQuote: true, semi: false }], // Prettier formatting rules
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js', // Exclude specific files like babel.config.js
    },
  ],
};
