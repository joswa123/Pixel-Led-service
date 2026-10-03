/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2342",
          50: "#F0F4F8",
          100: "#D9E3EE",
          200: "#B3C7DC",
          300: "#80A3C5",
          700: "#133E6E",
          800: "#0F2F55",
          900: "#0A2342",
          950: "#051324",
        },
        brandOrange: {
          DEFAULT: "#FF8C00",
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          400: "#FB923C",
          500: "#FF8C00",
          600: "#EA580C",
          700: "#C2410C",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE5D",
          light: "#DCF8C6",
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        card: "0 2px 10px -2px rgba(10, 35, 66, 0.06), 0 8px 24px -4px rgba(10, 35, 66, 0.08)",
        hover: "0 12px 32px -4px rgba(10, 35, 66, 0.14), 0 4px 12px -2px rgba(10, 35, 66, 0.06)",
        cta: "0 6px 20px 0 rgba(255, 140, 0, 0.35)",
        ctaGreen: "0 6px 20px 0 rgba(37, 211, 102, 0.35)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
      },
    },
  },
  plugins: [],
};
