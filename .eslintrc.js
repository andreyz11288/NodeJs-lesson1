module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': 0,
    'Strings must use singlequote.': 0,
    'Extra semicolon': 0,
    'Missing space before function parentheses': 0,
  },
}
