import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    blackAlpha: {
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.30)",
      300: "rgba(0, 0, 0, 0.60)",
      700: "rgba(0, 0, 0, 0.64)"
    },
  },  
});

export default theme;
