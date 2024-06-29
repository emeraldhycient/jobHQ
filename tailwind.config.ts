import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#2d2d2d',
        'light-gray': '#9ca3af',
        'custom-yellow': '#fbbf24',
        'custom-purple': '#a855f7',

        neonGreen: '#39FF14',
        neonPurple: {
          DEFAULT: '#B026FF',
          dark: '#6A0DAD',
        },
        blackBg: '#111111',
        darkBg: '#121212',
        cardBg: '#1E1E1E',
        lightText: '#E0E0E0',
        grayText: '#B3B3B3',
        highlight: '#3F3F3F',
        accent: '#FF0000',
        gray: {
          400: '#B3B3B3',
          600: '#4B4B4B',
          700: '#3F3F3F',
        },
        green: {
          400: '#34D399',
          500: '#10B981',
        },
        red: {
          400: '#F87171',
          500: '#EF4444',
        },
        yellow: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
        },
        // Adding more colors for flexibility
        darkGray: '#333333',
        mediumGray: '#555555',
        softBlack: '#000000',
        softWhite: '#F5F5F5',
        errorRed: '#FF4C4C',
        warningYellow: '#FFC107',
        successGreen: '#28A745',
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
