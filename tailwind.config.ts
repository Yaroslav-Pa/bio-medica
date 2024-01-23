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
        mainColor: 'rgb(230, 230, 230)',
        secondColor: 'rgb(180, 180, 180)',
        thierdColor: 'rgb(60, 64, 67)',
        buttonColor: 'rgb(180, 180, 180)',
        hoverColor: 'rgb(255, 255, 255)',
        hoverBackUpColor: 'rgb(0, 0, 0)',
      },
      fontSize: {
        small: '12px',
        base: '14px',
        large: '18px',
        xl: '24px',
      },
      maxWidth: {
        containerWidth: '1400px',
      },
    },
  },
  plugins: [],
};
export default config;
