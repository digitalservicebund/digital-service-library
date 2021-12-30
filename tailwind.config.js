module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "h-sm": { raw: "(min-height: 640px)" },
        "h-md": { raw: "(min-height: 768px)" },
        "h-lg": { raw: "(min-height: 1024px)" },
        "h-xl": { raw: "(min-height: 1280px)" },
        "h-2xl": { raw: "(min-height: 1536px)" },
      },
      fontFamily: {
        sans: [
          "BundesSansWeb",
          "Calibri",
          "Verdana",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        serif: [
          "BundesSerifWeb",
          "Cambria",
          "Georgia",
          "'Times New Roman'",
          "serif",
        ],
        condensed: [
          "BundesSansCondWeb",
          "Calibri",
          "Verdana",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
      colors: {
        blue: {
          50: "#E5EDF1",
          100: "#CCDBE4",
          200: "#004B76",
          300: "#99B7C8",
          400: "#004B76",
          500: "#6693AD",
          600: "#4C819F",
          700: "#336F91",
          800: "#1A5D84",
          900: "#004B76",
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
          50: "#EDEEF0",
          100: "#DCDEE1",
          200: "#CACDD2",
          300: "#B8BDC3",
          400: "#A6ACB5",
          500: "#959BA6",
          600: "#838B97",
          700: "#717A88",
          800: "#606A79",
          900: "#4E596A",
        },
        dustyYellow: "#E5CE5C",
        yellow: {
          50: "#FEFCEF",
          100: "#FDF9DF",
          200: "#FCF6CE",
          300: "#FBF3BE",
          400: "#FAF0AE",
          500: "#F9EC9E",
          600: "#F8E98E",
          700: "#F7E67D",
          800: "#F6E36D",
          900: "#F5E05D",
        },
        red: {
          50: "#F9E5EC",
          100: "#F2CCD8",
          200: "#ECB3C5",
          300: "#E699B1",
          400: "#DF809E",
          500: "#D9668B",
          600: "#D34C77",
          700: "#CD3364",
          800: "#C61A50",
          900: "#B0243F",
        },
        darkGreen: "#01854A",
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
