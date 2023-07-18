const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#2D2E32",
        primary2: "#25262A",
        primary3: "#212226",
        secondary: "#86EFBE",
        tertiary: "#4926C0",
        white1: "#FBFCFC",
        white2: "#EEEEEE",
        white3: "#E6E7E8",
      },
    },
  },
  plugins: [],
});
