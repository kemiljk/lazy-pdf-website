const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'media',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
    }
  },
  variants: {},
  plugins: []
}
