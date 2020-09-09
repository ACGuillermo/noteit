module.exports = {
  purge: {
    content: ['./src/**/*.js', './src/**/*.jsx'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}