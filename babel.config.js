module.exports = {
  presets: [
    '@babel/preset-env', // ES6/ES7/ES8 в ES5
    [
      '@babel/preset-react', // JSX в ES5
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
}
