module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          '@agendaedu/ae-web-components': './src/index',
        },
      },
    ],
  ],
}
