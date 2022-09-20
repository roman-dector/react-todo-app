const OFF = 0,
  WARN = 1,
  ERROR = 2
module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: [
    'react-hooks',
    'typescript',
    'jest',
    'testing-library',
    'jest-dom',
  ],
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    'max-len': [WARN, 70],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks:
          '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
      },
    ],
  },
}
