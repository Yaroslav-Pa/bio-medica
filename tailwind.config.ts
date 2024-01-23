import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainColor: 'rgb(230, 230, 230)',
        secondColor: 'rgb(180, 180, 180)',
        hoverColor: 'rgb(255, 255, 255)',
      },
      fontSize: {
        small: '12px',
        base: '14px',
      },
      maxWidth: {
        containerWidth: '1400px',
      },
    },
  },
  plugins: [],
};
export default config;
