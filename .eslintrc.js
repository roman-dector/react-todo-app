const OFF = 0,
  WARN = 1,
  ERROR = 2

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  // extends: ['prettier'],
  // plugins: ['prettier'],
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    'max-len': [WARN, 70],
    // 'prettier/prettier': ['warn'],
  },
}
