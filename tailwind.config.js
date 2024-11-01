/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FF6800',
        'custom-green': '#22D8B4',
        'custom-gray-dark': '#181A1D',
        'custom-dark': '#242629',
      },
      backgroundOpacity: {
        '20': '0.2', // Custom opacity value
      },
      screens: {
        xs:'375px',
        '2xs': '567px',
        sm: '768px',
        md: '992px',
        lg: '1180px',
      },
      container: {
        center: true, 
        screens: {         
          md: '992px',         
          lg: '1180px',  
        },
      },
    },
  },
  plugins: [],
}

