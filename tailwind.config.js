// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html','./src/**/*.{js,ts,tsx,jsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1124px',
      monitor: '1800px'
    },
    extend: {
      minHeight:{
        lg : '24rem'
      },
      backgroundImage:{
        'authBg': "url('../public/image/auth/auth-bg.jpeg')"
      }
    },
    colors:{
      primary:'#C26F2D',
      secondary:'#5D3891',
    },
    fontSize: {
      xxs: ['10px', { lineHeight: '20px', letterSpacing: '-0.005em' }],
      xs: ['12px', { lineHeight: '20px', letterSpacing: '-0.005em' }],
      sm: ['14px', { lineHeight: '24px', letterSpacing: '-0.005em' }],
      md: ['16px', { lineHeight: '28px', letterSpacing: '-0.005em' }],
      lg: ['20px', { lineHeight: '28px', letterSpacing: '-0.005em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '0.015em' }],
      '2xl': ['32px', { lineHeight: '48px', letterSpacing: '0.015em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '0.015em'}],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '0.015em' }],
      '5xl': ['64px', { lineHeight: '80px', letterSpacing: '0.015em' }],
      xxl: ['96px', { lineHeight: '100px', letterSpacing: '0.015em' }],
      sms: ['14px', { lineHeight: '20px', letterSpacing: '0.15em' }],
    },
    fontFamily: {
      'abhaya': ['Abhaya Libre'],
      'vietnam': ['Be Vietnam Pro'],
      'manrope': ['Manrope']
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }
      };
      addUtilities(newUtilities);
    }
  ],
}