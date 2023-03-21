/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: { "100": "#ebeef2", "200": "#eaeaea" },
        orange: "#f99a0e",
        darkorange: "#dc880b",
        peru: "#9e6104",
        "primary-contrast": "#fff",
        "studio-lightmode-midseparator-dee3eb": "#dee3eb",
        slategray: "#576074",
        darkslategray: "#434343",
        "studio-darkmode-normalsolid-icons-96a2be": "#96a2be",
        dimgray: "#495367",
        "studio-lightmode-lightseparator-ecf0f6": "#ecf0f6",
        "studio-darkmode-exportbg-1a202e": "#1a202e",
        "studio-darkmode-maincta-457eff": "#457eff",
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      fontFamily: {
        "components-button-large": "Roboto",
        poppins: "Poppins",
        "source-code-pro": "'Source Code Pro'",
        alegreya: "Alegreya",
      }
      spacing: {
        28: '7rem',
      },
      borderRadius: { "3xs": "10px" },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      lg: "18px",
      "3xl": "22px",
      sm: "14px",
      mid: "17px",
      base: "16px",
      "7xl": "26px",
    },
    screens: { md: { max: "960px" }, sm: { max: "420px" } },
  },

  corePlugins: { preflight: false },
  plugins: [],
}
