module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      fontFamily: {
        mulish: ['Mulish', ' sans-serif'],
        montserrat: ['Montserrat', ' sans-serif'],
      },
      backgroundColor: {
        lightBeige: '#F8F8F8',
      },
      boxShadow: {
        transparentBorder: 'inset 0 0 0 9px rgb(255 255 255 / 15%)',
      },
      borderRadius: {
        morph: '60% 40% 30% 70%/60% 30% 70% 40%',
      },
      keyframes: {
        morph: {
          '0%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite 1s',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
