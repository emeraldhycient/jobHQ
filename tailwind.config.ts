import type { Config } from "tailwindcss"

const config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "#121212",
        blue: {
          primary: "#1E88E5",
          2: "#1E88E51A",
          3:"#1E88E5"
        },
        warm: {
          light: "#E593331A",
          primary:"#E59333"
        },
        gray: {
          1: "#E0E0E0",
          2: "#1E1E1E",
          3: "#B0B0B0",
          4: "#898989",
          5: "#121212",
          6: "#303030",
          7: "#151515",
          8: "#2F2F2F",
          9:"#E0E0E01A"
        },
        green: {
          light: "#9FFF871A",
          primary:"#9FFF87",
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1)', opacity: "1" },
          '50%': { transform: 'scale(1.5)', opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        sparkle: 'sparkle 1s infinite',
      },
      backgroundImage: {
        'hero-image': "url('/images/Image.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config