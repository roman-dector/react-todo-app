module.exports = {
  presets: [
    '@babel/preset-react', // JSX в ES5
    [
      ('@babel/preset-env',
      {
        targets: {
          chrome: '58',
          ie: '11',
        },
      }),
    ],
    '@babel/preset-typescript',
  ],
}
