const colors = require('tailwindcss/colors');


module.exports = {
  purge: false,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
      },
    },
  },
};
