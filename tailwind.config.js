module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['BundesSansWeb', 'Calibri', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'],
        serif: ['BundesSerifWeb', 'Cambria', 'Georgia', '"Times New Roman"', 'serif'],
        condensed: ['BundesSansCondWeb', 'Calibri', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        blue: {
          100: "#ccdde4",
          200: "#b0c9d3",
          300: "#99bbc8",
          400: "#7ea8b9",
          500: "#6497ab",
          600: "#4b879e",
          700: "#337791",
          800: "#005576",
          900: "#003b52",
        },
        beige: {
          100: "#fdf8f4",
          200: "#f4f0eb",
          300: "#eee8e1",
          400: "#e9e0d8",
          500: "#e3d9ce",
          600: "#d9cdc0",
          700: "#d2c6b8",
          800: "#cdc0b1",
          900: "#c5b8a9",
        },
        grey: {
          100: "#dadada",
          200: "#c9c9c9",
          300: "#bababa",
          400: "#a7a7a7",
          500: "#979797",
          600: "#868686",
          700: "#757575",
          800: "#656565",
          900: "#545454",
        },
        yellow: {
          100: "#fcf3e5",
          200: "#fcefdb",
          300: "#fdebd0",
          400: "#fde7c5",
          500: "#fde2ba",
          600: "#fedba5",
          700: "#ffd28f",
          800: "#ffc979",
          900: "#ffbc57",
        },
        red: {
          100: "#f9e5eb",
          200: "#efc9d5",
          300: "#e9b0c2",
          400: "#e397af",
          500: "#de7e9c",
          600: "#d86488",
          700: "#d24b75",
          800: "#c92659",
          900: "#c0003c",
        },
        green: {
          100: "#c9dbd7",
          200: "#b0cbc4",
          300: "#97bbb2",
          400: "#7eaca0", // TODO: CHECK w/ UX
          500: "#7eaca0", // TODO: CHECK w/ UX
          600: "#4b8c7c",
          700: "#327c69",
          800: "#196c57",
          900: "#005c45",
        },
        purple: {
          100: "#ccc9d9",
          200: "#b5b0c8",
          300: "#9d97b7",
          400: "#867ea6",
          500: "#6e6495",
          600: "#574b84",
          700: "#3f3274",
          800: "#281963",
          900: "#100052",
        },
        white: "#fff",
        black: "#0b0c0c",
      },
    },
  },
  variants: {},
  plugins: [],
};