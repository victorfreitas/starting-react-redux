module.exports = () => ({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env', 'react'],
      plugins: [
        'transform-object-rest-spread',
        'array-includes'
      ]
    }
  }
})
