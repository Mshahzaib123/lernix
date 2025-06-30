/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        '2xs': '420px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
        '3xl': '1500px'
      },
      fontFamily: {
        lexend: 'Lexend',
        kumbhSans: 'KumbhSans'
      },
      backgroundColor: {
        transparent: 'transparent',
        // primary: '#8a47cb',
        primary: '#0063f4',
        secondary: '#1cca81',
        whiteShade: '#fbfbfb',
        white: '#ffffff',
        white100: '#f2f2f2',
        white200: '#f8f8f8',
        lightRed100: '#ff553e',
        bodyColor: '#555555',
        black: '#070707',
        blue100: '#008bf0',
        darkBlue: '#0e1a2dd9',
        darkBlue2: '#0c1327',
        yellow: "rgb(255, 178, 0)",
        bodyColor2: '#878787',
        lightGreen: '#efffdf',
        lightPink100: '#ffebdf',
        lightPink200: '#fff7fc',
        lightPink300: '#ffebdf',
        darkPink100: '#ff7e84',
        grey100: '#f0f0f0',
        grey200: '#d9d9d9',
        // lightPurple100: '#efe8f6',
        lightPurple100: '#599cff30',
        lightGreen100: '#e3f9f6'
      },
      keyframes: {
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
        moveBg: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(60px)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveBounce: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(200px)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveBounce2: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' }
        },
        rotateMe: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ripple: {
          '0%': { transform: 'scale(1)' },
          '55%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        borderTransform: {
          '0%, 100%': {
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
          },
          '14%': {
            borderRadius: '40% 60% 54% 46% / 49% 60% 40% 51%',
          },
          '28%': {
            borderRadius: '54% 46% 38% 62% / 49% 70% 30% 51%',
          },
          '42%': {
            borderRadius: '61% 39% 55% 45% / 61% 38% 62% 39%',
          },
          '56%': {
            borderRadius: '61% 39% 67% 33% / 70% 50% 50% 30%',
          },
          '70%': {
            borderRadius: '50% 50% 34% 66% / 56% 68% 32% 44%',
          },
          '84%': {
            borderRadius: '46% 54% 50% 50% / 35% 61% 39% 65%',
          },
        },
      },
      animation: {
        zoomInOut: 'zoomInOut 5s linear infinite',
        moveBg: 'moveBg 5s linear infinite',
        moveBounce: 'moveBounce 10s linear infinite',
        moveBounce2: 'moveBounce2 1s linear infinite',
        rotateMe: 'rotateMe 10s linear infinite',
        rotateMe2: 'rotateMe 20s linear infinite',
        ripple: 'ripple 4s linear infinite',
        borderTransform: 'borderTransform 7s infinite alternate forwards',
      },
      colors: {
        transparent: 'transparent',
        // primary: '#8a47cb',
        primary: '#0063f4',
        secondary: '#1cca81',
        whiteShade: '#fbfbfb',
        whiteShade200: '#cfcfcf',
        lightRed100: '#ff553e',
        white: '#ffffff',
        bodyColor: '#555555',
        black: '#070707',
        yellow: "rgb(255, 178, 0)",
        bodyColor2: '#878787',
        lightGrey: '#7b7b8a',
        greyShade: '#555555',
        greyShade2: '#4b4956',
        darkBrown: '#92210f'
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '5': '5px'
      },
      borderColor: {
        transparent: 'transparent',
        // primary: '#8a47cb',
        primary: '#0063f4',
        secondary: '#1cca81',
        whiteShade200: '#ececec',
        whiteShade: '#fbfbfb',
        white: '#ffffff',
        bodyColor: '#555555',
        black: '#070707',
        yellow: "rgb(255, 178, 0)",
        bodyColor2: '#878787',
        greyLight: '#f0f0f0',
        greyShade: '#ededed',
        lightPurple100: '#599cff',
      },
      boxShadow: {
        boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.05)',
        boxShadow2: '0px 35px 55px 0px rgba(0, 0, 0, 0.1)',
        boxShadow3: '0px 35px 55px 0px rgba(0, 0, 0, 0.08)',
        dropdownShadow: '0 0 20px 3px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(100deg, #0063f4 7.82%, #00f0aa 87.12%)',
        'hero-bg1': 'url(../src/assets/banner-bg.webp)',
        'videoBg': 'url(../src/assets/video1.webp)',
        'videoBg2': 'url(../src/assets/video2.webp)',
        'bannerWrapBg': 'url(../src/assets/banner-wrap-bg.webp)',
        'funFactBg': 'url(./src/assets/funfact-bg.webp)',
        'newsletterShape1': 'url(../src/assets/shape8.svg)',
        'newsletterShape2': 'url(../src/assets/shape9.svg)'
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          padding: "0",
          margin: "0",
        },
        body: {
          padding: "0",
          margin: "0",
          fontFamily: "KumbhSans",
          "background-color": "#fbfbfb",
        },
        '*': {
          padding: "0",
          margin: "0",
          boxSizing: "border-box",
        },
        ul: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        li: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        a: {
          display: "inline-block",
          textDecoration: "none",
          transition: "0.3s linear",
          '&:hover': {
            textDecoration: "none",
          },
        },
        p: {
          margin: "0",
          padding: "0",
        },
        h1: {
          margin: "0",
          padding: "0",
        },
        h2: {
          margin: "0",
          padding: "0",
        },
        h3: {
          margin: "0",
          padding: "0",
        },
        h4: {
          margin: "0",
          padding: "0",
        },
        h5: {
          margin: "0",
          padding: "0",
        },
        h6: {
          margin: "0",
          padding: "0",
        },
        img: {
          maxWidth: '100%',
          height: 'auto',
        },
        '.stroker': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#ffffff4d',
        },
        '.container': {
          width: '1320px !important',
          'max-width': '100%',
          margin: '0 auto',
          padding: '0 15px !important',
          "@media (max-width: 1200px)": {
            maxWidth: '100% !important',
            padding: '0 12px !important',
          },
        },
        '.container-fluid': {
          width: 'calc(100% - 100px)',
          margin: 'auto',
          "@media (max-width: 1400px)": {
            width: '100%',
            padding: '0 16px',
          },
        },
      });
    },
  ],
}