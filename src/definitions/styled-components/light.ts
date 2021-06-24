// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const light: DefaultTheme = {
  colors: {
    ...common.colors,
    toggleBorder: "#ABB7C4",
    toggleBackground: "#C1BB9F",
    background: "#C1BB9F",
    headerBg: "#F4EED8",
    cardsBg: "#FFFFFF",
    textColor: "#000000",
    dodgerBlue: "#007BFF",
    logo: "#3f3d3e"
  },
};

export { light };
