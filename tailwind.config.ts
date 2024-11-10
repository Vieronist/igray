import type { Config } from "tailwindcss";

// import borderGradients from 'tailwindcss-border-gradients';

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(100.65deg, #E4FAF3 0.34%, rgba(228, 250, 243, 0.29) 47.86%, #E4FAF3 92.62%, rgba(228, 250, 243, 0.34) 138.07%)",
      },

      borderImage: {
        gradients: {
          "gradient-to-r":
            "linear-gradient(141.87deg, #62CEA6 -13.43%, #72F2C1 46.91%, #66D7AD 98.32%)",
        },
      },

      // fontFamily: {
      //   otans:
      // }
    },
  },
  plugins: [],
};
export default config;
