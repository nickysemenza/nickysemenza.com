/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    // https://github.com/tailwindlabs/tailwindcss-typography/issues/18#issuecomment-664707541
    // typography: {
    //   default: {
    //     css: {
    //       "code::before": {
    //         content: '""',
    //       },
    //       "code::after": {
    //         content: '""',
    //       },
    //     },
    //   },
    // },
    extend: {
      colors: {
        gray: colors.neutral,
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
