// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
  colors: {
    ...common.colors,
    toggleBorder: "#556678",
    toggleBackground: "#20232A",
    background: "#20232A",
    headerBg: "#20232A",
    cardsBg: "#1A1C22",
    textColor: "#e3d9c5",
    dodgerBlue: "#0062CC",
    logo: "#e3d9c5"
  },
};

export { dark };
