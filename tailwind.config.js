/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      width: {
        A4: "8.3in",
      },
      height: {
        A4: "11.7in",
      },
      padding: {
        "A4-y": "1in",
        "A4-x": "1.25in",
      },
    },
  },
  plugins: [],
};
