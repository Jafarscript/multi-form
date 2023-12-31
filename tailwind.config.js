/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'magnolia':'hsl(217, 100%, 97%)',
        'alabaster':'hsl(231, 100%, 99%)',
        'lol-white':'hsl(0, 0%, 100%)',
        'marine-blue':'hsl(213, 96%, 18%)',
        'purplish-blue':'hsl(243, 100%, 62%)',
        'pastel-blue':'hsl(228, 100%, 84%)',
        'light-blue':'hsl(206, 94%, 87%)',
        'strawberry-red':'hsl(354, 84%, 57%)',
      },
      gridTemplateColumns: {
        'main': '1fr 1fr 2.5fr'
      },
    },
  },
  plugins: [],
}

