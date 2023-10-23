/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#191825",
        "pink-ish": "#F85E9F",
      },
      fontSize: {
        "text-23": "23px",
      },
      fontWeight: {
        "font-bold": "bold",
      },
    },
  },
  plugins: [],
};
