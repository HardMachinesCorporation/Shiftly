import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,ts}',
    './pages/**/*.{vue,ts}',
    './layouts/**/*.{vue,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F11A7B',
        secondary: '#982176',
        accent: '#3E001F',
        wine: '#3E001F',
        soft: '#FFE5AD',
        // Optionnel : variantes nommées
        shiftly: {
          pink: '#F11A7B',
          violet: '#982176',
          wine: '#3E001F',
          sand: '#FFE5AD',

        },
      },
    },
  },
  plugins: [],
}

export default config
