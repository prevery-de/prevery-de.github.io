/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prevery': {
          '50': '#f0f9f3',
          '100': '#dbf0e0',
          '200': '#bae0c6',
          '300': '#8cc9a2',
          '400': '#5bac7a',
          '500': '#3a8f5e',
          '600': '#2a754b',
          '700': '#215b3d',
          '800': '#1c4931',
          '900': '#183c2a',
          '950': '#0c2218',
        },
      },
      fontFamily: {
        asap: ['Asap', 'sans'],
        varela: ['VarelaRound', 'sans'],
      },
    },
  },
  plugins: [],
}

