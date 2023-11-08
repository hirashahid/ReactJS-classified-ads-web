/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(85deg, #F64C71 3.07%, #FD654E 100%)',
      },
    },
    colors: {
      primary: {
        100: '#384884',
        200: '#1A2A66',
        300: '#282C3F',
      },
      secondary: {
        100: '#FD654E',
        200: '#F64C71',
      },
      button: {
        100: '#D9D9D9',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

export default config;
