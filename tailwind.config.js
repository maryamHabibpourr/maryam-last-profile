/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // primary: "var(--color-primary)",
        // secondary: "var(--color-secondary)",
        heading: "#f5f5f7",
        text: "var(--color-text)",
        // background: "var(--color-background)",
      },
      fontFamily: {
        body: "var(--font-inter), sans-serif",
        heading: "var(--font-cousine), serif",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundColor:{
        "blue-back":"linear-gradient(to right,blue 20%, rgb(0,0,0,0.6) 80%)"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Grid11.png')",
        "Experience-pattern": "url('src/assets/whiteback.png')"
      },
      // spacing: {
      //   0: "0",
      //   1: "0.4rem",
      //   2: "0.8rem",
      //   3: "1.2rem",
      //   4: "1.6rem",
      //   5: "2rem",
      //   6: "2.4rem",
      //   7: "2.8rem",
      //   8: "3.2rem",
      //   9: "3.6rem",
      //   10: "4rem",
      //   11: "4.4rem",
      //   12: "4.8rem",
      //   13: "5.2rem",
      //   14: "5.6rem",
      //   15: "6rem",
      //   16: "6.4rem",
      // },
      fontSize: {
        // xs: "1.05rem",
        // sm: "1.4rem",
        // md: "1.575rem",
        // lg: "1.7rem",
        // xl: "2.1rem",
        // "2xl": "4.2rem",
        // "3xl": "6.3rem",
      },
    },
  },
  plugins: [],
};