import { createTheme } from "@mui/material";
import { Prompt } from "next/font/google";

export const prompt = Prompt({
  weight: "500",
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#D0BCFF",
      dark: "#381E72",
      light: "#EADDFF",
    },
    secondary: {
      main: "#CCC2DC",
      dark: "#332D41",
      light: "#4A4458",
    },
    background: {
      default: "#1C1B1F",
    },
  },
  typography: {
    allVariants: {
      color: "#D8DEE9",
      ...prompt.style,
    },
  },
});

export default theme;
