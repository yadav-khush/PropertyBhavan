module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      vsm: "300px",
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      mvsm: "400px",
      msm: "600px",
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
    extend: {
      colors: {
        violet: "#7F56D9",
        deep_purple_906: "#2d187d",
        deep_purple_905: "#36218b",
        deep_purple_900: "#352089",
        deep_purple_800: "#40299c",
        purple: "#341f87",
        deep_purple_500: "#6840c6",
        deep_purple_400: "#7e56d8",
        gray_200_7f: "#ededee7f",
        deep_purple_700: "#4a2fb6",
        black_900_3f: "#0000003f",
        deep_purple_900_99: "#35208999",
        deep_purple_900_cc: "#352089cc",
        gray_50: "#f9f5ff",
        black_904: "#0d0c0c",
        yellow_400: "#fff066",
        teal_400: "#1fc87f",
        black_903: "#050505",
        gray_900_0c: "#1018280c",
        black_906: "#090808",
        yellow: "#ffeb34",
        black_905: "#0c0b0b",
        black_900: "#000000",
        black_902: "#070707",
        black_901: "#040404",
        deep_purple_A100: "#9177fa",
        white_A700_8d: "#ffffff8d",
        deep_purple_A200_66: "#8668fd66",
        gray_901: "#161616",
        gray_902: "#1e1010",
        gray_900: "#0f1728",
        bluegray_100: "#cfd4dc",
        gray_900_07: "#10182807",
        deep_purple_400_35: "#7e56d835",
        gray_100: "#f6f6f7",
        black_900_cc: "#050505cc",
        bluegray_500: "#667084",
        white_A701: "#fffcfc",
        white_A700: "#ffffff",
        deep_purple_A200_33: "#8668fd33",
        white_A702: "#fefdff",
      },
      borderRadius: {
        radius8: "8px",
        radius12: "12px",
        radius13: "13px",
        radius20: "20px",
        radius50: "50%",
      },
      boxShadow: {
        bs7: "0px 4px  4px 0px #352089cc",
        bs8: "0px 4px  4px 0px #352089",
        bs3: "0px 4px  4px 0px #8668fd33",
        bs5: "0px 4px  4px 0px #8668fd66",
        bs: "0px 1px  2px 0px #1018280c",
        bs2: "0px 2px  2px 0px #0000003f",
        bs4: "0px 2px  4px 0px #0000003f",
        bs1: "0px 4px  4px 0px #0000003f",
        bs6: "0px 4px  4px 0px #35208999",
        bs9: "0px 4px  6px 2px #10182807",
      },
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
        inter: "Inter",
      },
      textShadow: {
        ts1: "0px 2px  2px #0000003f",
        ts: "0px 4px  4px #0000003f",
      },
      letterSpacing: { ls1: "1px", ls2: "2px", ls3: "3px", ls4: "4px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
