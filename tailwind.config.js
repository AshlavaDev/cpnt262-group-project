/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      'headerDisplay': 'Goldman, Brush Script MT, Garamond, cursive',
      'contentSans': 'Barlow Semi Condensed, Geneva, Verdana, sans-serif'
    },
    extend: {
      backgroundImage: {
        'homeHero': "url('/img/robot-sideview.jpg')",
        'aboutHero': "url('/img/robot-lookup.jpg')"
      }
    },
  },
  plugins: [],
}
