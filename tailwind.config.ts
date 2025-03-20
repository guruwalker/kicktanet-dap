import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: {
          50: '#e6f7fa',
          100: '#b3e5f3',
          200: '#80d3ee',
          300: '#4dc1e8',
          400: '#26b2e3',
          500: '#00a3da',
          600: '#0091c7',
          700: '#007cae',
          800: '#006696',
          900: '#005080',
          950: '#003c66',
        },
        jungle: {
          50: '#e6f2f0',
          100: '#b3d6cf',
          200: '#80b9af',
          300: '#4d9c8f',
          400: '#268576',
          500: '#146E60',
          600: '#0f5c50',
          700: '#0b4a40',
          800: '#073830',
          900: '#042620',
          950: '#021510',
        }
      }
    }
  },
  plugins: [],
};
