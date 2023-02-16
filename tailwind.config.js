/** @type {import('tailwindcss').Config} */
module.exports = {
  app:{
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "Vaizr":"Vazir FD-UI"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite')
  ],
}
