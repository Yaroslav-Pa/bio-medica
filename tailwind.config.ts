import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        firstColor: '#DBF3FF',
        secondColor: 'white',
        thirdColor: '#71CFFF',
        textColor: 'rgb(60, 64, 67)',
        textWhiteColor: 'rgb(240, 240, 240)',
        hoverColor: '#3c6c85',
        bgColor: 'rgb(255,255,255)',
        blackTransperent: '#00000063',
        buttonColor: 'rgb(60, 64, 67)',
        cardImgBorderColor: 'rgb(60, 64, 67)',
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
  plugins: [],
};
export default config;
