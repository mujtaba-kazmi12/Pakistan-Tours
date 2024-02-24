module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        'white-A700': '#ffffff', // Replace with your color value
         'Black':'#000000'
      },
      spacing: {
        '17px': '17px',
        '9px': '9px',
      },
      fontSize: {
        'xs': '.75rem',    // Extra Small
        'sm': '.875rem',   // Small
        'base': '1rem',    // Base
        'lg': '1.125rem',  // Large
        'xl': '1.25rem',   // Extra Large
        '2xl': '1.8rem',   // 2X Large
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
      textShadow: {
        // Define your custom text shadow
        default: '4px 3px 8px black',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/forms'),
  ],
};
