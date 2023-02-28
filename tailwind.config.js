/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./templates/**/*.html", "./theme/**/*.html", "./themes/"],
    theme: {
      container: {
        center: true,
      },
      extend: {
      }
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };