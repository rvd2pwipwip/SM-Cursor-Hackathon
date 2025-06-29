/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "stingray-blue": "#0070E0",
        "stingray-dark": "#030213",
        "stingray-gray": {
          100: "rgba(25,25,25,0.05)",
          300: "rgba(25,25,25,0.3)",
          500: "rgba(25,25,25,0.5)",
          700: "rgba(25,25,25,0.7)",
          800: "rgba(25,25,25,0.8)",
        },
      },
      spacing: {
        "card-sm": "160px",
        "card-md": "200px",
        "card-lg": "240px",
        sidebar: "80px",
        header: "100px",
      },
      borderRadius: {
        card: "15px",
      },
      gridTemplateColumns: {
        "responsive-1": "repeat(1, minmax(0, 1fr))",
        "responsive-2": "repeat(2, minmax(0, 1fr))",
        "responsive-3": "repeat(3, minmax(0, 1fr))",
        "responsive-4": "repeat(4, minmax(0, 1fr))",
        "responsive-5": "repeat(5, minmax(0, 1fr))",
        "responsive-6": "repeat(6, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".line-clamp-1": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "1",
        },
        ".line-clamp-2": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "2",
        },
        ".line-clamp-3": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "3",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
