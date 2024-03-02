import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'ssm': '440px',
      'sm': '640px',
      'md': '768px',
      'mdp': '880px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1850px',
    },
    extend: {
      backgroundImage: {},
      colors: {
        firstColor: '#befcff',
        secondColor: 'white',
        thirdColor: '#affbfb',
        orangeLight: '#ffc895',
        orangeMax: '#ff7a1e',
        orangeDark: '#ffaf66',
        textColor: 'rgb(60, 64, 67)',
        textWhiteColor: 'rgb(240, 240, 240)',
        hoverColor: '#3c6c85',
        bgColor: 'rgb(255,255,255)',
        blackTransperent: '#00000063',
        buttonColor: 'rgb(60, 64, 67)',
        cardImgBorderColor: 'rgb(60, 64, 67)',
        cardFirstColor:'#00d6e0',
        cardSecondColor: '#009fa9'
      },
      fontSize: {
        small: '12px',
        base: '14px',
        medium: '16px',
        large: '18px',
        xl: '20px',
        '2xl': '24px',
      },
      maxWidth: {
        containerWidth: '1000px',
      },
    },
  },
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4|5|6)/,
    },
  ],
  plugins: [],
};
export default config;
