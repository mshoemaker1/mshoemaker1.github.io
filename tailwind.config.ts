import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern 2025 color palette
        primary: {
          50: "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#486581",
          700: "#334E68",
          800: "#243B53",
          900: "#1A2938",
          950: "#102A43",
        },
        accent: {
          50: "#FFF5F0",
          100: "#FFE8DC",
          200: "#FFCDB8",
          300: "#FFB094",
          400: "#FF9370",
          500: "#E07A5F",
          600: "#C86A52",
          700: "#B05A45",
          800: "#984A38",
          900: "#803A2B",
        },
        sage: {
          50: "#F5FAF7",
          100: "#E8F5ED",
          200: "#D1EBD9",
          300: "#BAE1C6",
          400: "#A3D7B2",
          500: "#81B29A",
          600: "#6A9A84",
          700: "#54826E",
          800: "#3D6A58",
          900: "#275242",
        },
        cream: {
          50: "#FDFCFB",
          100: "#FAF8F5",
          200: "#F7F4ED",
          300: "#F4F1DE",
          400: "#F1EED0",
          500: "#EEEBC2",
          600: "#E8E3A8",
          700: "#E2DB8E",
          800: "#DCD374",
          900: "#D6CB5A",
        },
        navy: {
          50: "#F2F3F5",
          100: "#E5E7EB",
          200: "#D1D5DC",
          300: "#9CA3AF",
          400: "#6B7280",
          500: "#4B5563",
          600: "#374151",
          700: "#1F2937",
          800: "#1A1F36",
          900: "#111827",
          950: "#0A0D1A",
        },
        // Keep original colors for backward compatibility
        sand: {
          300: "#E9E1D5",
          500: "#D3C3AC",
        },
        green: {
          300: "#BECBB3",
          500: "#7D9968",
        },
        lavender: {
          300: "#CDCCE0",
          500: "#9C9AC1",
        },
        bronze: {
          300: "#DDC3A2",
          500: "#BA8745",
        },
        neutral: {
          350: "#AAAAAA",
          550: "#545454",
        },
      },
      fontFamily: {
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fjalla-one)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 3.75rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    }
  },
  plugins: [],
};
export default config;
