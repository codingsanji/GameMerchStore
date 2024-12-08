/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      ipad: { 'raw': '(min-device-width: 768px) and (max-device-width: 1024px)' },
    },
    extend: {
      fontSize: {
        'xxs': '0.5rem',
      },
      maxWidth: {
        's': '22rem',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '36rem', 
        '144': '40rem', 
      },
      maxHeight: {
        '104': '40rem', 
      },
    },
  },
  variants: {},
  plugins: [],
};
