import { Theme } from "./types/Theme"

export const darkTheme: Theme = {
  colors: {
    primary: "#262626",
    accent: "#EC853B",
    background: "#171717",
    overlay: "rgba(0, 0, 0, 0.7)",
  },
  fontColors: {
    normal: "#e0e0e0",
    muted: "rgba(255, 255, 255, 0.5)",
  },
  transparencies: {
    lightPositive: "rgba(255, 255, 255, 0.1)",
    strongPositive: "rgba(255, 255, 255, 0.4)",
    lightNegative: "rgba(0, 0, 0, 0.3)",
    strongNegative: "rgba(0, 0, 0, 0.6)",
  },
  graph: {
    dot: "#9f9f9f",
  },
}
