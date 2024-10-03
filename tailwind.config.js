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
          '50': '#f3f6f4',
          '100': '#e2e9e2',
          '200': '#c7d3c7',
          '300': '#a1b4a3',
          '400': '#77907b',
          '500': '#57725c',
          '600': '#3d5241',
          '700': '#354739',
          '800': '#2c3930',
          '900': '#243027',
          '950': '#141a16',
        },
        'prevery-highlight': {
          '50': '#fff9ed',
          '100': '#fff1d4',
          '200': '#ffdfa8',
          '300': '#ffc771',
          '400': '#ffad4c',
          '500': '#fe8811',
          '600': '#ef6c07',
          '700': '#c65008',
          '800': '#9d400f',
          '900': '#7e3610',
          '950': '#441906',
        },
      },
      fontFamily: {
        asap: ['Asap', 'sans'],
        varela: ['VarelaRound', 'sans'],
        ubuntu: ['Ubuntu', 'sans'],
      },
    },
  },
  plugins: [],
}

