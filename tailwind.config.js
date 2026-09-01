/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.75rem",
        lg: "2.5rem",
        xl: "3.5rem",
      },
      screens: { "2xl": "1180px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#10262d",
          soft: "#3a4e54",
          muted: "#61757b",
        },
        line: {
          DEFAULT: "#dce6e7",
          strong: "#c3d3d4",
        },
        surface: {
          DEFAULT: "#f3f7f7",
          2: "#eaf2f1",
        },
        brand: {
          50: "#e6f2f2",
          DEFAULT: "#0d7b84",
          600: "#0a616a",
          700: "#084c53",
        },
        accent: {
          DEFAULT: "#e0a53d",
          600: "#c98c22",
        },
        wa: {
          DEFAULT: "#1faa54",
          600: "#188544",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', '"Iowan Old Style"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,38,45,.06), 0 2px 8px rgba(16,38,45,.05)",
        md2: "0 12px 30px -12px rgba(16,38,45,.22), 0 4px 12px -6px rgba(16,38,45,.12)",
        lg2: "0 40px 80px -30px rgba(16,38,45,.32)",
      },
      borderRadius: {
        xl2: "1.6rem",
      },
      spacing: {
        13: "3.25rem",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(31,170,84,.5)" },
          "70%": { boxShadow: "0 0 0 16px rgba(31,170,84,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(31,170,84,0)" },
        },
        "float-y": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "pulse-ring": "pulse-ring 2.6s infinite",
        "float-y": "float-y 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
