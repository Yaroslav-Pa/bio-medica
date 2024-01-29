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
        firstColor: 'rgb(230, 230, 230)',
        secondColor: 'rgb(180, 180, 180)',
        thierdColor: 'rgb(237, 237,237)',
        textColor: 'rgb(60, 64, 67)',
        hoverColor: 'rgb(98, 150, 171)',
        bgColor:'rgb(237, 237,237)',
      },
      fontSize: {
        small: '12px',
        base: '14px',
        large: '18px',
        xl: '24px',
        '2xl': '28px',
      },
      maxWidth: {
        containerWidth: '1400px',
      },
    },
  },
  plugins: [],
};
export default config;
