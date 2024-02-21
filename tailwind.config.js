/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'schemeone': '#E14620',
        'schemetwo': '#000000',
        'schemethree': '#B41223',
        'schemefour': '#DE882C',
        'schemefive': '#71A8A1',
        'schemesix': '#191C2B',
        'grey': '#A6ACB0',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)' }
        }
      },
      animation: {
        'open-menu': 'open-menu 0.7s ease-in-out forwards'
      }
    },
  },
  plugins: [],
};
